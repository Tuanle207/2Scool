import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

interface Props {
  component: React.FC<RouteComponentProps>; 
  isAuth?: boolean; 
  path: string; 
  exact?: boolean;
}

const ProtectedRoute: React.FC<Props> = ({
  component: Component,
  isAuth = false,
  path,
  exact = false, 
  ...rest
}) => {

  return (
    <Route 
      {...{ path, exact, ...rest }}
      render={props => 
        isAuth ? 
        (<Component {...props} />)
        :
        (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
      }
    />
  );
};

export default ProtectedRoute;