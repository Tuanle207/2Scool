import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Dashboard from '@views/Dashboard';
import SchoolManagementDashboard from '@views/SchoolManagementDashboard';
import ProtectedRoute from '@components/Router/ProtectedRoute';
import RolesManagement from '@views/RolesManagement';
import View2 from '@views/View2';

interface Props {
  isAuth?: boolean;
}

const DashboardRouter: React.FC<Props> = ({ isAuth = false }) => {
  return (
    <Router>
      <Switch>
        <Route 
          path='/dashboard' 
          exact
          component={Dashboard}
        />
        <Route 
          path='/roles' 
          exact
          component={RolesManagement}
        />
        <Route 
          path='/view2'
          component={View2}
        />
        <ProtectedRoute
          path='/admin'
          exact
          component={SchoolManagementDashboard}
          isAuth={isAuth}
        />
        <Redirect to='/dashboard' />
      </Switch>
    </Router>
  );
};

export default DashboardRouter;