import appColor from '@assets/themes/appColor';
import { makeStyles } from '@material-ui/core';

const useLoginFormStyles = () => makeStyles(theme => ({
  formContainer: {
    height: '100%',
    background: appColor.white,
    padding: '10rem',
    borderRadius: '0 30px 30px 0'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textField: {
    width: '25rem',
    margin: '1rem',
  },
  button: {
    width: '25rem',
    margin: '20px',
    padding: '10px 0',
    alignSelf: 'center',
    color: appColor.white,

    '&:hover': {
      transform: 'scale(1.01, 1.01)'
    },
  }
}));

export default useLoginFormStyles;