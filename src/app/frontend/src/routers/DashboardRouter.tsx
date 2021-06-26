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
import UserManagement from '../views/UserManagement';
import RoleManagement from '../views/RoleManagement';
import DCPReportCreatePage from '../views/DCPReportCreatePage';
import DCPReportHistoryPage from '../views/DCPReportHistoryPage';
import DCPRankingPage from '../views/DCPRankingPage';
import DCPStatisticsPage from '../views/DCPStatisticsPage';
import TaskAssignmentPage from '../views/TaskAssignmentPage';
import ErrorPage from '../views/ErrorPage';
import { policies } from '../common/appConsts';
import DCPReportUpdatePage from '../views/DCPReportUpdatePage';
import DCPReportSchedule from '../views/DCPReportSchedule';
import DCPReportScheduleAssignment from '../views/DCPReportScheduleAssignment';
import LessonRegisterReportAssignment from '../views/LessonRegisterReportAssignment';

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
        <ProtectedRoute 
          path='/dcp-report-approval'
          exact
          policyName={policies.DcpReportsAcceptReject}
          component={DCPReportsApprovalPage}
        />
        <ProtectedRoute 
          path='/dcp-report-approval/:dcpReportId'
          exact
          policyName={policies.DcpReportsGet}
          component={DCPReportPage}
        />
         <ProtectedRoute 
          path='/dcp-report-history'
          exact
          policyName={policies.DcpReportsGetAll}
          component={DCPReportHistoryPage}
        />
        <ProtectedRoute 
          path='/my-dcp-report'
          exact
          policyName={policies.DcpReportsGetAll}
          component={MyDCPReportPage}
        />
        <ProtectedRoute 
          path='/task-assignments'
          exact
          component={TaskAssignmentPage}
        />
        <ProtectedRoute 
          path='/dcp-report-creation'
          exact
          policyName={policies.DcpReportsCreate}
          component={DCPReportCreatePage}
        />
        <ProtectedRoute 
          path='/dcp-report-update/:dcpReportId'
          exact
          policyName={policies.DcpReportsUpdate}
          component={DCPReportUpdatePage}
        />
        <ProtectedRoute 
          path='/dcp-report-schedules'
          exact
          component={DCPReportSchedule}
        />
        <ProtectedRoute
          path='/dcp-report-schedules-assignment'
          exact
          component={DCPReportScheduleAssignment}
        />
        <ProtectedRoute 
          path='/lesson-register-report-schedules'
          exact
          component={LessonRegisterReportAssignment}
        />
        <ProtectedRoute 
          path='/dcp-rankings'
          exact
          component={DCPRankingPage}
        />
        <ProtectedRoute 
          path='/dcp-statistics'
          exact
          component={DCPStatisticsPage}
        />
        <ProtectedRoute 
          path='/my-dcp-report/:dcpReportId'
          exact
          policyName={policies.DcpReportsGet}
          component={MyDCPReportPage}
        />
        <ProtectedRoute
          path='/admin/courses' 
          exact
          policyName={policies.Courses}
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
        <ProtectedRoute 
          path='/admin/users'
          policyName={policies.AbpIdentityUsers}
          component={UserManagement}
        />
        <ProtectedRoute 
          path='/admin/roles'
          policyName={policies.AbpIdentityRoles}
          component={RoleManagement}
        />
        <Route 
          path='/errors'
          component={ErrorPage}
        />
        <Redirect to='/dashboard' />
      </Switch>
    </Router>
  );
};

export default DashboardRouter;