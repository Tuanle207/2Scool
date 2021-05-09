import React from 'react';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import useLoginFormStyles from '@assets/jss/components/Form/useLoginFormStyles';
import { withRedux } from '@common/utils/ReduxConnect';
import { AuthActions } from '@common/store/actions';
import { User } from '@common/interfaces';

interface Props {
  children?: React.ReactNode;
  history: any;
  auth: any;
  postLogin: (params: User.LoginReqBody) => void;
}

const LoginForm: React.FC<Props> = ({ history, auth, postLogin }) => {

  const styles = useLoginFormStyles();
  
  const [ email, setEmail ] = React.useState<string>('');
  const [ password, setPassword ] = React.useState<string>('');

  const onFormSumbit = (e: any) => {
    e.preventDefault();
    postLogin({username: email, password: password});
  };

  return (
    <Container className={styles.formContainer}>
      <form className={styles.form} onSubmit={onFormSumbit}>
        <Typography variant='h4'>ĐĂNG NHẬP</Typography>
        <TextField
          className={styles.textField}
          id='login-email'
          label='Email'
          // required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          className={styles.textField}
          id='login-password'
          label='Mật khẩu'
          // required
          value={password}
          type='password'
          onChange={e => setPassword(e.target.value)}
        />
        <Button 
          className={styles.button}
          variant='contained'
          color='primary'
          type='submit'
          disableElevation
          onClick={onFormSumbit}
        >
          Đăng nhập
        </Button>
      </form>
    </Container>
  );
};

export default withRedux<Props>({
  component: LoginForm,
  stateProps: (state: any) => ({
    auth: state.auth
  }),
  dispatchProps: ({
    postLogin: AuthActions.postLoginAsync
  })
});