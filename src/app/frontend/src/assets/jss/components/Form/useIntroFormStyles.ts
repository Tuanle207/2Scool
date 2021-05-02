import appColor from '@assets/themes/appColor';
import { makeStyles } from '@material-ui/core';

const useIntroFormStyles = () => makeStyles(theme => ({
  formContainer: {
    height: '100%',
    width: '50rem',
    background: '#267dff',
    padding: '10rem',
    borderRadius: '30px 0 0 30px',
    color: '#fff',
    borderColor: theme.palette.grey.A200
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: '#fff',
    borderColor: '#fff',
    borderRadius: 50,
    padding: '10px 20px',
    '&:hover': {
      borderColor: '#fff',
    }
  },
}));

export default useIntroFormStyles