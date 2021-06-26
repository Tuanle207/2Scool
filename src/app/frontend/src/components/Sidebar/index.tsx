import React from 'react';
import { Box, Collapse, Container, Grid, LinkProps, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Dashboard } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import useSidebarStyles from '../../assets/jss/components/Sidebar/sidebarStyles';
import { withRedux } from '../../common/utils/ReduxConnect';
import { Util } from '../../common/interfaces';
import { policies } from '../../common/appConsts';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

interface ISidebarInfo {
  key: string;
  title: string;
  Icon: any;
  route: string;
  policyName: string;
  subItems?: ISidebarInfo[];
}

const sidebarItems: Util.IObject<ISidebarInfo[]> = {
  admin: [
    {
      key: 'courses',
      title: 'Khóa học',
      Icon: Dashboard,
      route: '/admin/courses',
      policyName: policies.Courses
    },
    {
      key: 'teachers',
      Icon: Dashboard,
      title: 'Giáo viên',
      route: '/admin/teachers',
      policyName: ''
    },
    {
      key: 'classes',
      Icon: Dashboard,
      title: 'Lớp học',
      route: '/admin/classes',
      policyName: ''
    },
    {
      key: 'students',
      Icon: Dashboard,
      title: 'Học sinh',
      route: '/admin/students',
      policyName: ''
    },
    {
      key: 'grades',
      Icon: Dashboard,
      title: 'Khối',
      route: '/admin/grades',
      policyName: ''
    },
    {
      key: 'users',
      Icon: Dashboard,
      title: 'Người dùng',
      route: '/admin/users',
      policyName: policies.AbpIdentityUsers
    },
    {
      key: 'roles',
      Icon: Dashboard,
      title: 'Quyền',
      route: '/admin/roles',
      policyName: policies.AbpIdentityRoles
    }
  ],
  dashboard: [
    {
      key: 'dashboard',
      title: 'Trang chủ',
      Icon: Dashboard,
      route: '/dashboard',
      policyName: ''
    },
    {
      key: 'dcp-report-approval',
      Icon: Dashboard,
      title: 'Duyệt',
      route: '/dcp-report-approval',
      policyName: policies.AbpIdentityRoles
    },
    {
      key: 'dcp-report-history',
      Icon: Dashboard,
      title: 'Lịch sử duyệt',
      route: '/dcp-report-history',
      policyName: policies.DcpReportsGetAll
    },
    {
      key: 'my-dcp-report',
      Icon: Dashboard,
      title: 'Lịch sử chấm',
      route: '/my-dcp-report',
      policyName: policies.DcpReportsGetAll
    },
    {
      key: 'task-assignments',
      Icon: Dashboard,
      title: 'Phân công',
      route: '/task-assignments',
      policyName: ''
    },
    {
      key: 'task-assignments-post',
      Icon: Dashboard,
      title: 'Phân công',
      route: '',
      policyName: '',
      subItems: [
        {
          key: 'report-schedule-assignment',
          Icon: Dashboard,
          title: 'Trực cờ đỏ',
          route: '/dcp-report-schedules',
          policyName: ''
        },
        {
          key: 'lessons-register-report-schedule-assignment',
          Icon: Dashboard,
          title: 'Nộp sổ đầu bài',
          route: '/lesson-register-report-schedules',
          policyName: ''
        }
      ]
    },
    {
      key: 'dcp-rankings',
      Icon: Dashboard,
      title: 'Xếp hạng',
      route: '/dcp-rankings',
      policyName: ''
    },
    {
      key: 'dcp-statistics',
      Icon: Dashboard,
      title: 'Thống kê',
      route: '/dcp-statistics',
      policyName: ''
    }
  ]
};

interface OwnProps {
  activeKey?: string;
}

type Props = OwnProps & {
  grantedPolicies: Util.IObject<boolean>
}
interface ListItemLinkProps extends LinkProps {
  open?: boolean;
  primary: string;
  id: string;
}

function ListItemLink(props: Omit<ListItemLinkProps, 'ref'>) {
  const { open, primary, ...other } = props;

  return (
    <li key={props.id}>
      <ListItem button {...other}>
        <ListItemText primary={primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

const Sidebar: React.FC<Props> = ({ activeKey, grantedPolicies }) => {

  const styles = useSidebarStyles();
  const location = useLocation();

  const [expandSubMenu, setExpandSubMenu] = React.useState(false);

  const handleClick = () => {
    setExpandSubMenu((prevOpen) => !prevOpen);
  };

  React.useEffect(() => {
    if (activeKey && [
      'report-schedule-assignment', 
      'lessons-register-report-schedule-assignment'
    ].includes(activeKey)) {
      setExpandSubMenu(true);
    }
  }, [activeKey]);
  
  return (
    <Container className={styles.container}>
      <Box className={styles.filterBackground}></Box>
      <Box className={styles.titleWrapper}>
        <Typography variant='h4' >2Scool</Typography>
      </Box>
      <List component='nav'>
        {
          sidebarItems[location.pathname.startsWith('/admin') ? 'admin' : 'dashboard'].map(item => 
            ((grantedPolicies && grantedPolicies[item.policyName] === true) || item.policyName === '') && (
              item.key === 'task-assignments' ? (
                <ListItemLink 
                  key={item.key}
                  id={item.key}
                  primary={item.title} 
                  className={`${styles.listItem} ${item.key === activeKey ? styles.listItemActive : ''}`}
                  open={expandSubMenu} 
                  onClick={handleClick} />
              ) :
              item.key === 'task-assignments-post' ? (
                <Collapse component="li" in={expandSubMenu} timeout="auto" unmountOnExit>
                  <List disablePadding>
                      {
                        item.subItems && item.subItems.map(el => (
                          <ListItem 
                            button
                            className={`${styles.listItem} ${el.key === activeKey ? styles.listItemActive : ''}`}
                            component={Link} 
                            to={el.route}
                            key={el.key}  style={{paddingLeft: 24}} >
                          <ListItemText primary={el.title} className={styles.subMenuItem} />
                        </ListItem>
                        ))
                      }
                  </List>
                </Collapse>
              ) : (
                <ListItem
                  button 
                  className={`${styles.listItem} ${item.key === activeKey ? styles.listItemActive : ''}`}
                  component={Link}
                  to={item.route}
                  key={item.key}
                >
                  {/* <ListItemIcon className={styles.listItemIcon}>
                    <item.Icon />
                  </ListItemIcon> */}
                  <ListItemText primary={item.title} />
                </ListItem>
              )
            )
          )
        }
      </List>
      <Box className={styles.copyRight}>
        <p>&copy; 2021 2Scool<br/>All rights reserved.</p>
      </Box>
    </Container>
  )
};

export default withRedux<OwnProps>({
  component: Sidebar,
  stateProps: (state: any) => ({
    grantedPolicies: state.appConfig?.appConfig?.auth?.grantedPolicies
  })
});