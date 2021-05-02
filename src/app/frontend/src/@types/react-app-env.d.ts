declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production',
    REACT_APP_PLATFORM?: 'mobile' | 'web'
  }
}