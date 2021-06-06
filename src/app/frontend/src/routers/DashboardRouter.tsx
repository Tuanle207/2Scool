import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import ProtectedRoute from '../components/Router/ProtectedRoute';
import CoursesPage from '../views/CoursesPage';
import TeachersPage from '../views/TeachersPage';
import GradesPage from '../views/GradesPage';
import ClassesPage from '../views/ClassesPage';
import StudentsPage from '../views/StudentsPage';
import DCPReportsApprovalPage from '../views/DCPReportsApprovalPage';
import DCPReportPage from '../views/DCPReportPage';
import MyDCPReportPage from '../views/MyDCPReportPage';

interface Props {
  isAuth?: boolean;
}

const DashboardRouter: React.FC<Props> = ({ isAuth = false }) => {
  return (
    <Router>
      <Switch>
        <Route 
          path='/dcp-report-approval'
          exact
          component={DCPReportsApprovalPage}
        />
        <Route 
          path='/dcp-report-approval/:dcpReportId'
          exact
          component={DCPReportPage}
        />
        <Route 
          path='/my-dcp-report'
          exact
          component={MyDCPReportPage}
        />
        <Route 
          path='/my-dcp-report/:dcpReportId'
          exact
          component={MyDCPReportPage}
        />
        <Route 
          path='/admin/dashboard' 
          exact
          component={Dashboard}
        />
        <Route 
          path='/admin/courses' 
          exact
          component={CoursesPage}
        />
        <Route 
          path='/admin/classes'
          component={ClassesPage}
        />
        <Route 
          path='/admin/students'
          component={StudentsPage}
        />
        <Route 
          path='/admin/teachers'
          component={TeachersPage}
        />
        <Route 
          path='/admin/grades'
          component={GradesPage}
        />
        <Redirect to='/dcp-report-approval' />
      </Switch>
    </Router>
  );
};

export default DashboardRouter;