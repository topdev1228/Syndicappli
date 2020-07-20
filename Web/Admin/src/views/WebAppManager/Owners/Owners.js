import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import authService from '../../../services/authService.js';
import SelectTable from '../../../components/SelectTable';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import CircularProgress from '@material-ui/core/CircularProgress';
import {ManagerService as Service} from '../../../services/api.js';
import MySelect from '../../../components/MySelect';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './useStyles';

const ManagerService = new Service();
const Owners = (props) => {
  const { history } = props;

  // const token = authService.getToken();    
  // if (!token) {
  //   history.push("/admin/login");
  //   window.location.reload();
  // }

  const accessOwners = authService.getAccess('role_owners');
  const [visibleIndicator, setVisibleIndicator] = React.useState(false);

  const [company, setCompany] = useState([]);
  const [companies, setCompanies] = useState('');
  const [companyList, setCompanyList] = useState([]);
  const [companyID, setCompanyID] = useState(-1);

  const [building,setBuilding] = useState([]);
  const [buildings, setBuildings] = useState('');
  const [buildingList, setBuildingList] = useState([]);
  const [buildingID, setBuildingID] = useState(-1);

  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const [deleteId, setDeleteId] = useState(-1);
  const classes = useStyles();
  const [dataList, setDataList] = useState([]);
  const [totalpage, setTotalPage] = useState(1);
  const [row_count, setRowCount] = useState(20);
  const [page_num, setPageNum] = useState(1);
  const [sort_column, setSortColumn] = useState(-1);
  const [sort_method, setSortMethod] = useState('asc');
  const [role, setRole] = useState(0);
  const selectList = [20, 50, 100, 200, -1];
  const roleList = ['Tout', 'Copropriétaire', 'Sous-compte', 'member of the council'];
  const owner_role = ['all', 'owner', 'subaccount', 'member'];
  const handleChangeCompanies = (val) => {
    setCompanies(val);
    setCompanyID(companyList[val].companyID);
  };
  const handleChangeBuildings = (val) => {
    setBuildings(val);
    setBuildingID(buildingList[val].buildingID);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const handleCloseDialog = (val) => {
    setOpenDialog(val);
  };

  const handleChangeSelect = (value) => {
    setRowCount(selectList[value]);
  }
  const handleChangePagination = (value) => {
    setPageNum(value);
  }
  const handleSort = (index, direct) => {
    setSortColumn(index);
    setSortMethod(direct);
  }
  const handleChangeRoles = (value) => {
    setRole(value);
    console.log(roleList[role])
  }
  useEffect(() => {
    if (accessOwners === 'denied') {
      setOpenDialog(true);
    } else {
      getCompanies()
    }
  }, [accessOwners]);
  useEffect(() => {
    if (accessOwners !== 'denied') {
      getBuildings();
      getOwners();
    }
  }, [companyID]);
  useEffect(() => {
    if (accessOwners !== 'denied') {
      getOwners();
    }
  }, [page_num, row_count, sort_column, sort_method, buildingID, role,props.refresh]);
  const cellList = [
    { key: 'lastname', field: 'Nom' },
    { key: 'firstname', field: 'Prénom' },
    { key: 'email', field: 'Email' },
    { key: 'phone', field: 'Téléphone' },
    { key: 'owner_role', field: 'Role' },
    { key: 'count', field: 'Lot' }
  ];
  const columns = [];
  for (let i = 0; i < 6; i++)
    columns[i] = 'asc';
  const handleClickEdit = (id, buildingid) => {
    history.push('/admin/owners/edit?id=' + id + '&&buildingID=' + buildingid);
  };
  const handleClickDelete = (id) => {
    if (accessOwners === 'edit') {
      setOpenDelete(true);
      setDeleteId(id);
    } else {
      setOpenDialog(true);
    }
  };
  const handleClickAllSelect = ()=>{
  }
  const handleClickImport = ()=>{
    // setPageNum();
  }
  const handleClickExport = ()=>{
    // setPageNum();
  }
  const handleDelete = () => {
    handleCloseDelete();
    setDeleteId(-1);
    setVisibleIndicator(true);
    ManagerService.deleteUser(deleteId)
      .then(
        response => {
          console.log(response.data);
          setVisibleIndicator(false);
          if (response.data.code !== 200) {
            console.log('error');
          } else {
            console.log('success');
            alert('Deleted successful');
            const data = response.data.data;
            localStorage.setItem("token", JSON.stringify(data.token));
          }
        },
        error => {
          console.log('fail');
          setVisibleIndicator(false);
        }
      );
  }

  const getCompanies = () => {
    setVisibleIndicator(true);
    ManagerService.getCompanyListByUser()
      .then(
        response => {
          setVisibleIndicator(false);
          if (response.data.code !== 200) {
            ToastsStore.error(response.data.message);
          } else {
            company.splice(0,company.length);
            const data = response.data.data;
            localStorage.setItem("token", JSON.stringify(data.token));
            company.push('Tout');
            data.companylist.map((item) => (
              company.push(item.name)
            )
            );
            setCompany(company);
            setCompanyList([{ 'companyID': -1 }, ...data.companylist]);
          }
        },
        error => {
          ToastsStore.error('Cant connect to the server!');
          setVisibleIndicator(false);
        }
      );
  }
  const getBuildings = () => {
    const requestData = {
      'search_key': '',
      'page_num': 0,
      'row_count': 20,
      'sort_column': -1,
      'sort_method': 'asc',
      'companyID': companyID
    }
    setVisibleIndicator(true);
    ManagerService.getBuildingList(requestData)
      .then(
        response => {
          setVisibleIndicator(false);
          if (response.data.code !== 200) {
            ToastsStore.error(response.data.message);
          } else {
            building.splice(0,building.length);
            const data = response.data.data;
            localStorage.setItem("token", JSON.stringify(data.token));
              building.push('Tout');
            data.buildinglist.map((item) => (
              building.push(item.name)
            )
            );
            setBuilding(building);
            setBuildingList([{ 'buildingID': -1 }, ...data.buildinglist]);
          }
        },
        error => {
          ToastsStore.error("Can't connect to the server!");
          setVisibleIndicator(false);
        }
      );
  }
  const getOwners = () => {
    const requestData = {
      'search_key': '',
      'page_num': page_num - 1,
      'row_count': row_count,
      'sort_column': sort_column,
      'sort_method': sort_method,
      'role': owner_role[role],
      'buildingID': buildingID,
      'companyID' : companyID
    }
    setVisibleIndicator(true);
    ManagerService.getOwnerList(requestData)
      .then(
        response => {
          setVisibleIndicator(false);
          if (response.data.code !== 200) {
            ToastsStore.error(response.data.message);
          } else {
            const data = response.data.data;
            localStorage.setItem("token", JSON.stringify(data.token));
            if (!data.totalpage)
              setTotalPage(1);
            else
              setTotalPage(data.totalpage);
            setDataList(data.ownerlist);
          }
        },
        error => {
          ToastsStore.error("Can't connect to the server!");
          setVisibleIndicator(false);
        }
      );
  }
  return (
    <>
      {
        visibleIndicator ? <div className={classes.div_indicator}> <CircularProgress className={classes.indicator} /> </div> : null
      }
      <div className={classes.title}>
      </div>
      <div className={classes.tool}>
        <Grid container spacing={2} direction="column">
          <Grid xs={6} sm={5} md={4} lg={3} xl={2} item container alignItems="center" spacing={2}>
            <Grid item ><p className={classes.subTitle}>Carbinet</p></Grid>
            <Grid xs item container direction="row-reverse">
              <Grid item container direction="column" alignItems="stretch">
                <MySelect
                  color="gray"
                  data={company}
                  onChangeSelect={handleChangeCompanies}
                  value={companies}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} sm={5} md={4} lg={3} xl={2} item container alignItems="center" spacing={2}>
            <Grid item ><p className={classes.subTitle}>Immeuble</p></Grid>
            <Grid xs item container direction="row-reverse">
              <Grid item container direction="column" alignItems="stretch">
                <MySelect
                  color="gray"
                  data={building}
                  onChangeSelect={handleChangeBuildings}
                  value={buildings}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} sm={5} md={4} lg={3} xl={2} item container alignItems="center" spacing={2}>
            <Grid item ><p className={classes.subTitle}>Rôle</p></Grid>
            <Grid xs item container direction="row-reverse">
              <Grid item container direction="column" alignItems="stretch">
                <MySelect
                  color="gray"
                  data={roleList}
                  onChangeSelect={handleChangeRoles}
                  value={role}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={classes.body}>
      <SelectTable
          onChangeSelect={handleChangeSelect}
          onChangePage={handleChangePagination}
          onSelectSort={handleSort}
          page={page_num}
          columns={columns}
          products={dataList}
          totalpage={totalpage}
          cells={cellList}
          onClickedit={handleClickEdit}
          onClickDelete={handleClickDelete}
          onImport={handleClickImport}
          onExport={handleClickExport}
          type="owner"
        />
      </div>
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />

    </>
  );
};

export default withRouter(Owners);
