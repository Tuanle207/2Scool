import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Dashboard from '@views/Dashboard';
import SchoolManagementDashboard from '@views/SchoolManagementDashboard';
import ProtectedRoute from '@components/Router/ProtectedRoute';
import CoursesPage from '@views/CoursesPage';
import AccountsPage from '@views/AccountsPage';
import SampleExcel from '@views/SampleExcel';

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
          path='/courses' 
          exact
          component={CoursesPage}
        />
        <Route 
          path='/accounts'
          component={AccountsPage}
        />
        <Route 
          path='/excel'
          component={SampleExcel}
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