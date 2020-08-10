import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MyButton from '../../../components/MyButton';
import { withRouter } from 'react-router-dom';
import authService from '../../../services/authService.js';
import AdminService from '../../../services/api.js';
import { ModulePaymentStyles as useStyles } from './useStyles';
import TextField from '@material-ui/core/TextField';

const ModulePayment = (props) => {
  const { history } = props;
  const token = authService.getToken();
  if (!token) {
    window.location.replace("/login");
  }
  const accessBuildings = authService.getAccess('role_buildings');
  const classes = useStyles();
  const [accountname, setAccountName] = useState('');
  const [accountaddress, setAccountAddress] = useState('');
  const [IBAN, setIBAN] = useState('');
  const handleClickApply = () => {

  }
  const handleClickPay = () => {

  }
  const handleChangeAccountName = (event) => {
    setAccountName(event.target.value);
  }

  const handleChangeAccountAddress = (event) => {
    setAccountAddress(event.target.value);
  }

  const handleChangeIBAN = (event) => {
    setIBAN(event.target.value);
  }
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Grid item xs={12} sm={6} container justify="flex-start" >
          <Grid item>
            <Typography variant="h2" className={classes.headerTitle}>
              <b>Modules - Paiement</b>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.tool}>
        <Grid item container spacing={1}>
          <Grid item container justify="space-between">
            <Grid item>
              <p className={classes.billingAddress}>Pack de Modules : Immeuble 36 rue Hector Berlioz, Agen </p>
            </Grid>
            <Grid item>
              <p className={classes.billingAddress}>x1</p>
            </Grid>
          </Grid>
          <Grid item container justify="space-between">
            <Grid item>
              <p className={classes.itemTitle}></p>
            </Grid>
            <Grid item>
              <p className={classes.price}>12,90€</p>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={classes.body}>
        <Grid item container direction="column" spacing={5}>
          <Grid item container spacing={1}>
            <Grid item container justify="space-between">
              <Grid item>
                <p className={classes.headerTitle}><b>TOTAL</b></p>
              </Grid>
              <Grid item>
                <p className={classes.price}><b>12,90€</b></p>
              </Grid>
            </Grid>
            <Grid item container justify="space-between">
              <Grid item>
                <p className={classes.itemTitle}>dont TVA à 20%</p>
              </Grid>
              <Grid item>
                <p className={classes.itemTitle}>2.15€</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" spacing={2}>
            <Grid item>
              <p className={classes.itemTitle}><b>Adresse de Facturation</b></p>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.billingAddress}>36 rue Hector Berlioz, 18000 Agen</p>
            </Grid>
            <Grid item>
              <p className={classes.modifier}><u>Modifier</u></p>
            </Grid>
          </Grid>
          <Grid item container direction="column" spacing={3}>
            <Grid item container alignItems="center" spacing={2}>
              <Grid item><p className={classes.sepaItemTitle}>Code Promo</p></Grid>
              <Grid xs item container alignItems="stretch">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid item>
              <MyButton name={"Appliquer"} color={"1"} onClick={handleClickApply} />
            </Grid>
          </Grid>
          <Grid xs={12} sm={10} md={8} lg={6} item container direction="column" spacing={3}>
            <Grid item>
              <p className={classes.itemTitle}><b>Moyen de Paiement</b></p>
            </Grid>
            <Grid item>
              <p className={classes.sepaItemTitle}>Compte bancaire - Prelevement SEPA</p>
            </Grid>
            <Grid item container direction="column" spacing={2}>
              <Grid item container alignItems="center" spacing={2}>
                <Grid item><p className={classes.sepaItemTitle}>Nom du titulaire du compte</p></Grid>
                <Grid xs item container direction="row-reverse">
                  <Grid item container alignItems="stretch" direction="column">
                    <TextField
                      className={classes.text}
                      variant="outlined"
                      value={accountname}
                      onChange={handleChangeAccountName}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container alignItems="flex-start" spacing={2}>
                <Grid item><p className={classes.sepaItemTitle}>Adresse</p></Grid>
                <Grid xs item container direction="row-reverse">
                  <Grid item container alignItems="stretch" direction="column">
                    <TextField
                      className={classes.text}
                      multiline
                      variant="outlined"
                      value={accountaddress}
                      onChange={handleChangeAccountAddress}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container alignItems="center" spacing={2}>
                <Grid item><p className={classes.sepaItemTitle}>IBAN</p></Grid>
                <Grid xs item container direction="row-reverse">
                  <Grid item container alignItems="stretch" direction="column">
                    <TextField
                      className={classes.text}
                      variant="outlined"
                      value={IBAN}
                      onChange={handleChangeIBAN}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justify="center" style={{ marginTop: 80 }}>
          <MyButton name={"Payer"} color={"1"} onClick={handleClickPay} />
        </Grid>
      </div>
    </div>
  );
};

export default withRouter(ModulePayment);
