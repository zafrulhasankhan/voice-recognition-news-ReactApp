import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    color: 'black',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(21, 101, 192)',
  },
  image: {
    marginLeft: 20,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'rgba(21, 101, 192)',
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '12px',
      },
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  caption:{
    position:'absolute',
    top:'-500px', left:'0', right:'0',
    background: 'rgba(0, 0, 0, 0.5)',
    color:'white',
    padding:'30px',
    textAlign:'justify',
    transition: 'all 500ms ease',
  },
  logoContainer: {
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    overflow:'hidden',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
    
  },
  
  alanLogo: {
    height: '30vmin',
    width:'68vmin',
    borderRadius: '25%',
    padding: '0 5%',
    margin: '3% 0',
    '&:hover':{
      transform: 'scale(1.04)',
      boxShadow: '0 0 -4px -10px rgba(0, 0, 0, 0.25)'
      
  },
    [theme.breakpoints.down('sm')]: {
      height: '38vmin',
      width:'79vmin'
    },
  },
creater:{
  
  '&:hover':{
    transform: 'scale(1.10)',
    boxShadow: '0 0 40px -10px rgba(0, 0, 0, 0.25)'
}
}
 
}));