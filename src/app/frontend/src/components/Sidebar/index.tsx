import React from 'react';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Dashboard } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useSidebarStyles from '@assets/jss/components/Sidebar/sidebarStyles';

const sidebarItems = [
  {
    key: 0,
    title: 'Trang chủ',
    Icon: Dashboard,
    route: '/dashboard'
  },
  {
    key: 1,
    title: 'Khóa học',
    Icon: Dashboard,
    route: '/courses'
  },
  {
    key: 2,
    Icon: Dashboard,
    title: 'Tài khoản',
    route: '/accounts'
  },
  {
    key: 3,
    Icon: Dashboard,
    title: 'Upload Excel Sample',
    route: '/excel'
  }
];

interface Props {
  activeIndex: number;
}

const Sidebar: React.FC<Props> = ({ activeIndex = 0 }) => {

  const styles = useSidebarStyles();

  return (
    <Container className={styles.container}>
      <Box className={styles.titleWrapper}>
        <Typography variant='h4' >Scool</Typography>
      </Box>
      <List component='nav'>
        {
          sidebarItems.map(item => (
            <ListItem
              button 
              className={`${styles.listItem} ${item.key === activeIndex ? styles.listItemActive : ''}`}
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