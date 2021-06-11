import { IEnvConfig } from './common';

const appEnv: {[key: string]: IEnvConfig} = {
  development: {
    // host: 'http://localhost:5000',
    host: 'http://10.0.3.2:5000',
    oAuthConfig: {
      issuer: 'http://10.0.3.2:5000',
      clientId: 'Scool_App',
      clientSecret: '1q2w3e*',
      scope: 'offline_access Scool',
    },
    enableLogger: true
  },
  production: {
    host: 'http://localhost:5000',
    oAuthConfig: {
      issuer: 'http://localhost:5000',
      clientId: 'Scool_App',
      clientSecret: '1q2w3e*',
      scope: 'offline_access Scool',
    },
    enableLogger: false
  }
};

export default appEnv