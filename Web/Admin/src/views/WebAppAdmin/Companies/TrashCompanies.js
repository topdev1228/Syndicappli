import React, { useState, useEffect } from 'react';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import authService from '../../../services/authService.js';
import useStyles from './useStyles';
import AdminService from '../../../services/api.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import TrashTable from 'components/TrashTable';

const TrashCompanies = (props) => {
  const { history } = props;
  // const token = authService.getToken();    
  // if (!token) {
  //   history.push("/login");
  //   window.location.reload();
  // }
  const accessCompanies = authService.getAccess('role_companies');
  const [visibleIndicator, setVisibleIndicator] = React.useState(false);
  const classes = useStyles();
  const [openDelete, setOpenDelete] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(-1);
  const [dataList, setDataList] = useState([]);
  const [totalpage, setTotalPage] = useState(1);
  const [row_count, setRowCount] = useState(20);
  const [page_num, setPageNum] = useState(1);
  const [sort_column, setSortColumn] = useState(-1);
  const [sort_method, setSortMethod] = useState('asc');
  const selectList = [20, 50, 100, 200, -1];
  const cellList = [
    { key: 'name', field: 'Nom' },
    { key: 'contact_name', field: 'Contact' },
    { key: 'email', field: 'Email' },
    { key: 'phone', field: 'Téléphone' },
    { key: 'manager_count', field: 'Gestionnaires' },
    { key: 'apartment_count', field: 'Lots' },
    { key: 'status', field: 'Statut' },
    { key: '', field:''}
  ];

  const columns = [];
  for (let i = 0; i < 7; i++)
    columns[i] = 'asc';

  const handleClickRestore = (id) => {
      let data={
          'status': 'active'
      }
    AdminService.deleteCompany(id,data)
    .then(
      response => {
        setVisibleIndicator(false);
        switch(response.data.code){
          case 200:
            const data = response.data.data;
            localStorage.setItem("token", JSON.stringify(data.token));
            ToastsStore.success("Restored successfully!");
            getTrashCompanies();
            break;
          case 401:
            authService.logout();
            history.push('/login');
            window.location.reload();
            break;
          default:
            ToastsStore.error(response.data.message);
        }
      },
      error => {
        ToastsStore.error("Can't connect to the server!");
        setVisibleIndicator(false);
      }
    );
  }
  useEffect(() => {
    if (accessCompanies !== 'denied')
      getTrashCompanies();
  }, [page_num, row_count, sort_column, sort_method, props.refresh]);

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

  const handleClickDelete = (id) => {
    setOpenDelete(true);
    setDeleteId(id);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const handleDelete = () => {
    handleCloseDelete();
    setDeleteId(-1);
  }
  const getTrashCompanies = () => {
    const requestData = {
      'search_key': '',
      'page_num': page_num - 1,
      'row_count': row_count,
      'sort_column': sort_column,
      'sort_method': sort_method,
      'status': 'trash'
    }
    setVisibleIndicator(true);
    AdminService.getCompanyList(requestData)
      .then(
        response => {
          setVisibleIndicator(false);
          switch(response.data.code){
            case 200:
                console.log('success');
                const data = response.data.data;
                localStorage.setItem("token", JSON.stringify(data.token));
                if (!data.totalpage)
                  setTotalPage(1);
                else
                  setTotalPage(data.totalpage);
                setDataList(data.companylist);
              break;
            case 401:
              authService.logout();
              history.push('/login');
              window.location.reload();
              break;
            default:
              ToastsStore.error(response.data.message);
          }
        },
        error => {
          console.log('fail');
          setVisibleIndicator(false);
        }
      );
  }

  return (
    <div>
      {
        visibleIndicator ? <div className={classes.div_indicator}> <CircularProgress className={classes.indicator} /> </div> : null
      }
      <div className={classes.title}>
      </div>
      <div className={classes.tool}>
      </div>
      <div className={classes.body}>
        <TrashTable
          onChangeSelect={handleChangeSelect}
          onChangePage={handleChangePagination}
          onSelectSort={handleSort}
          page={page_num}
          columns={columns}
          products={dataList}
          totalpage={totalpage}
          cells={cellList}
          onClickRestore={handleClickRestore}
          access={accessCompanies}
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
    </div>
  );
};

export default withRouter(TrashCompanies);
