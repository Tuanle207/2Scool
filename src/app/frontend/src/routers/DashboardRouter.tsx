import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Dashboard from '@views/Dashboard';
import ProtectedRoute from '@components/Router/ProtectedRoute';
import CoursesPage from '@views/CoursesPage';
import AccountsPage from '@views/AccountsPage';

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
          path='/classes'
          component={AccountsPage}
        />
        <Route 
          path='/students'
          component={AccountsPage}
        />
        <Route 
          path='/teacher'
          component={AccountsPage}
        />
        <Route 
          path='/grades'
          component={AccountsPage}
        />
        <Redirect to='/dashboard' />
      </Switch>
    </Router>
  );
};

export default DashboardRouter;