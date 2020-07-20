import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTab-root': {
      textTransform: 'none'
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down('lg')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(2),
    },
  },
  title:{
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  titleText: {
    [theme.breakpoints.up('xl')]: {
      fontSize :35
    },
    [theme.breakpoints.down('lg')]: {
      fontSize :25
    },
    [theme.breakpoints.down('md')]: {
      fontSize :18
    },
  },
  tabTitle: {
    [theme.breakpoints.up('xl')]: {
      fontSize :20
    },
    [theme.breakpoints.down('lg')]: {
      fontSize :14
    },
    [theme.breakpoints.down('md')]: {
      fontSize :10
    },
  },
  modalTitle: {
    [theme.breakpoints.up('xl')]: {
      fontSize :28
    },
    [theme.breakpoints.down('lg')]: {
      fontSize :20
    },
    [theme.breakpoints.down('md')]: {
      fontSize :14
    },
  },
  tool: {
    [theme.breakpoints.up('xl')]: {
      minHeight: 67
    },
    [theme.breakpoints.down('lg')]: {
      minHeight: 47
    },
    [theme.breakpoints.down('md')]: {
      minHeight: 33
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  padding: {
    [theme.breakpoints.up('xl')]: {
      padding: 32
    },
    [theme.breakpoints.down('lg')]: {
      padding: 22
    },
    [theme.breakpoints.down('md')]: {
      padding: 15
    },
  },
  close: {
    color: 'gray'
  }
}));
export const AddProductStyles = makeStyles(theme => ({
  paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: 5,
      padding: theme.spacing(2, 4, 3),
  },
  footer: {
    [theme.breakpoints.up('xl')]: {
      paddingTop: 89,
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: 62,
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 43,
    },
  },
  root: {
    '& .MuiTextField-root': {
        [theme.breakpoints.up('xl')]: {
          width: 500,
        },
        [theme.breakpoints.down('lg')]: {
          width: 350,
        },
        [theme.breakpoints.down('md')]: {
          width: 245,
        },
    },
    '& .MuiOutlinedInput-input':{
      [theme.breakpoints.up('xl')]: {
        padding: '17px 25px',
        fontSize: 22,
      },
      [theme.breakpoints.down('lg')]: {
        padding: '12px 18px',
        fontSize: 15,
      },
      [theme.breakpoints.down('md')]: {
        padding: '8px 13px',
        fontSize: 11,
      },
    },
    '& p':{
        marginBottom: 0
    },
  },  
  input: {
      display: 'none'
  },
  img: {
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    border: '1px dashed rgba(112,112,112,0.43)',
    borderRadius: 8,
    [theme.breakpoints.up('xl')]: {
      width: 116,
      height: 92,
    },
    [theme.breakpoints.down('lg')]: {
      width: 81,
      height: 64,
    },
    [theme.breakpoints.down('md')]: {
      width: 57,
      height: 45,
    },
  },
title:{
  [theme.breakpoints.up('xl')]: {
    fontSize: 18,
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: 13,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 9,
  },
},
  error:{
      color: 'red',
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: 13,
      },
      [theme.breakpoints.down('md')]: {
        fontSize: 9,
      },
  }
}));
export const EditProductStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('xl')]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down('lg')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(2),
    },
    '& .MuiTextField-root': {
      // width: '100%'
  },
  '& .MuiOutlinedInput-input':{
      [theme.breakpoints.up('xl')]: {
        padding: '17px 25px',
        fontSize: 22,
      },
      [theme.breakpoints.down('lg')]: {
        padding: '12px 18px',
        fontSize: 15,
      },
      [theme.breakpoints.down('md')]: {
        padding: '8px 13px',
        fontSize: 11,
      },
    },
    '& p':{
      marginBottom: 0
    }
  },
  title:{
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  body:{
    [theme.breakpoints.up('xl')]: {
      marginTop: 64,
      padding: 40,
      borderRadius: 30,
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: 45,
      padding: 28,
      borderRadius: 21,
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 32,
      padding: 20,
      borderRadius: 15,
    },
    boxShadow: '0 3px 5px 2px rgba(128, 128, 128, .3)',
  },
  item:{
    marginTop: theme.spacing(5),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  input: {
    display: 'none',
  }, 
  div_indicator: {
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'fixed',
    paddingLeft: '50%',
    alignItems: 'center',
    marginTop: '-60px',
    zIndex: 999,
  },
  indicator: {
    color: 'gray'
  },
  backTitle:{
    cursor: 'pointer',
    [theme.breakpoints.up('xl')]: {
      fontSize: 18,
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 13,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 9,
    },
  },
  itemTitle:{
    [theme.breakpoints.up('xl')]: {
      fontSize: 25,
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 18,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 13,
    },
  },
  error:{
      color: 'red',
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: 13,
      },
      [theme.breakpoints.down('md')]: {
        fontSize: 9,
      },
  },
  headerTitle:{
      [theme.breakpoints.up('xl')]: {
        fontSize :35
      },
      [theme.breakpoints.down('lg')]: {
        fontSize :25
      },
      [theme.breakpoints.down('md')]: {
        fontSize :18
      },
  }
}));
export const BudgetStyles = makeStyles((theme, props)=> ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    [theme.breakpoints.up('xl')]: {
      fontWeight: 700
    },
    [theme.breakpoints.down('lg')]: {
      fontWeight: 490
    },
    [theme.breakpoints.down('md')]: {
      fontWeight: 343
    },
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    [theme.breakpoints.up('xl')]: {
      height: 56,
      width: 56
    },
    [theme.breakpoints.down('lg')]: {
      height: 39,
      width: 39
    },
    [theme.breakpoints.down('md')]: {
      height: 27,
      width: 27
    },
  },
  icon: {
    [theme.breakpoints.up('xl')]: {
      height: 32,
      width: 32
    },
    [theme.breakpoints.down('lg')]: {
      height: 22,
      width: 22
    },
    [theme.breakpoints.down('md')]: {
      height: 15,
      width: 15
    },
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: props=>props.color
  },
  differenceValue: {
    color: props=>props.color,
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('xl')]: {
      fontSize: 15
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 11
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 8
    },
  },
  tail:{
    [theme.breakpoints.up('xl')]: {
      fontSize: 15
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 11
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 8
    },
  },
  bodyTitle:{
    [theme.breakpoints.up('xl')]: {
      fontSize: 31
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 22
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 15
    },
  },
  caption:{
    [theme.breakpoints.up('xl')]: {
      fontSize: 18
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 13
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 11
    },
  },
  show: {
    visibility: 'visible',
    position: 'absolute',
    color: props=>props.color,
    zIndex: 0
  },
  hide: {
    visibility : 'hidden',
    color: props=>props.color,
    zIndex: 1
  }
}));
  export default useStyles;