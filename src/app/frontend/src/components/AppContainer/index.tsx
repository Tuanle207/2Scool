import { StylesProvider, CssBaseline, ThemeProvider } from '@material-ui/core'
import DashboardRouter from '../../routers/DashboardRouter';
import AuthRouter from '../../routers/AuthRouter';
import { theme, jss } from '@assets/themes/theme';
import { withRedux } from '@common/utils/ReduxConnect';
import { AppConfigActions } from '@common/store/actions';
import React from 'react';
import { AuthSelector } from '@common/store/selectors';
import { isTokenValid } from '@common/@helper/network/util';

interface Props {
  token: string;
  getAppConfig: () => void;
} 

const AppContainer: React.FC<Props> = ({ token, getAppConfig }) => {

  const isValid = React.useMemo(() => isTokenValid(token), [token]);

  React.useEffect(() => {
    getAppConfig();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme} >
      <StylesProvider jss={jss} >
        <CssBaseline>
          {
            isValid ? <DashboardRouter isAuth={isValid} /> : <AuthRouter />
          }
        </CssBaseline>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default withRedux({
  component: AppContainer,
  stateProps: (state: any) => ({
    token: AuthSelector.createTokenSelector()(state)
  }),
  dispatchProps: {
    getAppConfig: AppConfigActions.getAppConfigAsync
  }
});
