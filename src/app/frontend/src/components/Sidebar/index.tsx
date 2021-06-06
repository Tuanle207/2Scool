import React from 'react';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Dashboard } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import useSidebarStyles from '../../assets/jss/components/Sidebar/sidebarStyles';

const sidebarItems = {
  admin: [
    {
      key: 'dashboard',
      title: 'Trang chủ',
      Icon: Dashboard,
      route: '/admin/dashboard'
    },
    {
      key: 'courses',
      title: 'Khóa học',
      Icon: Dashboard,
      route: '/admin/courses'
    },
    {
      key: 'teachers',
      Icon: Dashboard,
      title: 'Giáo viên',
      route: '/admin/teachers'
    },
    {
      key: 'classes',
      Icon: Dashboard,
      title: 'Lớp học',
      route: '/admin/classes'
    },
    {
      key: 'students',
      Icon: Dashboard,
      title: 'Học sinh',
      route: '/admin/students'
    },
    {
      key: 'grades',
      Icon: Dashboard,
      title: 'Khối',
      route: '/admin/grades'
    }
  ],
  dashboard: [
    {
      key: 'discipline-approval',
      Icon: Dashboard,
      title: 'Duyệt chấm điểm nề nếp',
      route: '/discipline-approval'
    },
    {
      key: 'discipline-creation-history',
      Icon: Dashboard,
      title: 'Lịch sử chấm điểm nề nếp',
      route: '/discipline-creation-history'
    },
    {
      key: 'discipline-creation',
      Icon: Dashboard,
      title: 'Chấm điểm nề nếp',
      route: '/discipline-creation'
    },
    {
      key: 'discipline-report',
      Icon: Dashboard,
      title: 'Thống kê nề nếp',
      route: '/discipline-report'
    }
  ]
};

interface Props {
  activeKey: string;
}

const Sidebar: React.FC<Props> = ({ activeKey }) => {

  const styles = useSidebarStyles();
  const location = useLocation();

  return (
    <Container className={styles.container}>
      <Box className={styles.titleWrapper}>
        <Typography variant='h4' >2Scool</Typography>
      </Box>
      <List component='nav'>
        {
          sidebarItems[location.pathname.startsWith('/admin') ? 'admin' : 'dashboard'].map(item => (
            <ListItem
              button 
              className={`${styles.listItem} ${item.key === activeKey ? styles.listItemActive : ''}`}
              component={Link}
              to={item.route}
              key={item.key}
            >
              <ListItemIcon className={styles.listItemIcon}>
                <item.Icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))
        }
      </List>
    </Container>
  )
};

export default Sidebar;