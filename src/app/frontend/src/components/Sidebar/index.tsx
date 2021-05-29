import React from 'react';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Dashboard } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useSidebarStyles from '../../assets/jss/components/Sidebar/sidebarStyles';

const sidebarItems = [
  {
    key: 'dashboard',
    title: 'Trang chủ',
    Icon: Dashboard,
    route: '/dashboard'
  },
  {
    key: 'courses',
    title: 'Khóa học',
    Icon: Dashboard,
    route: '/courses'
  },
  {
    key: 'teachers',
    Icon: Dashboard,
    title: 'Giáo viên',
    route: '/teachers'
  },
  {
    key: 'classes',
    Icon: Dashboard,
    title: 'Lớp học',
    route: '/classes'
  },
  {
    key: 'students',
    Icon: Dashboard,
    title: 'Học sinh',
    route: '/students'
  },
  {
    key: 'grades',
    Icon: Dashboard,
    title: 'Khối',
    route: '/grades'
  }
];

interface Props {
  activeKey: string;
}

const Sidebar: React.FC<Props> = ({ activeKey }) => {

  const styles = useSidebarStyles();

  return (
    <Container className={styles.container}>
      <Box className={styles.titleWrapper}>
        <Typography variant='h4' >2Scool</Typography>
      </Box>
      <List component='nav'>
        {
          sidebarItems.map(item => (
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