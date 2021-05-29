import React from 'react';
import LoginForm from '../components/Form/LoginForm';
import IntroForm from '../components/Form/IntroForm';
import { withRedux } from '../common/utils/ReduxConnect';
import { RouteComponentProps } from 'react-router';
import { Grid } from '@material-ui/core';

interface Props extends RouteComponentProps {
  children?: React.ReactNode;
  history: any;
  checkLogin: Function;
}

const Login: React.FC<Props> = ({ history }) => {

  return (
    <div style={{ width: '100%', minHeight: 'inherit', position: 'absolute', background: 'orange', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container style={{background: 'red'}} justify='center' alignItems='center' >
        <Grid item style={{ height: '50rem' }}>
          <IntroForm history={history} />
        </Grid>
        <Grid item style={{  }}>
          <LoginForm history={history} />
        </Grid>
      </Grid>
    </div>
  )
};

// export default Login;

export default withRedux({
  component: Login,
  dispatchProps: (dispatch: any) => ({
    checkLogin: (params: any) => dispatch({})
  })
});