import { StylesProvider, CssBaseline, ThemeProvider } from '@material-ui/core'
import DashboardRouter from '../../routers/DashboardRouter';
import AuthRouter from '../../routers/AuthRouter';
import { theme, jss } from '@assets/themes/theme';
import { withRedux } from '@common/utils/ReduxConnect';
import { AppConfigActions } from '@common/store/actions';
import React from 'react';
import { AuthSelector, LoadingSelector } from '@common/store/selectors';
import { isTokenValid } from '@common/@helper/network/util';
import ActionModal from '@components/Modal';

interface Props {
  token: string;
  fetchingAppConfig: boolean;
  getAppConfig: () => void;
} 

const AppContainer: React.FC<Props> = ({ token, getAppConfig, fetchingAppConfig }) => {

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
            isValid && !fetchingAppConfig ? <DashboardRouter isAuth={isValid} /> : <AuthRouter />
          }
          <ActionModal />
        </CssBaseline>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default withRedux({
  component: AppContainer,
  stateProps: (state: any) => ({
    token: AuthSelector.createTokenSelector()(state),
    fetchingAppConfig: LoadingSelector.createFetchingAppConfigSelector()(state)
  }),
  dispatchProps: {
    getAppConfig: AppConfigActions.getAppConfigAsync
  }
});
