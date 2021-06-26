

import { Container, Grid, Box, Button, makeStyles, List, ListItem } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DisciplineApprovalCard from '../components/DCPReport/DisciplineApprovalCard';

const useStyles = makeStyles(theme => ({
  actionGroup: {
    padding: theme.spacing(1, 9),
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  list: {
    // overflowY: 'scroll'
    padding: '20px 100px' 
  }
}));


const TaskAssignmentPage = () => {
  
  const classes = useStyles();

  React.useEffect(() => {
    document.title = '2Cool | Phân công lịch trực cờ đỏ & gửi sổ đầu bài';
  }, []);

  const [ dateFilter, setDateFilter ] = React.useState<Date | null>(new Date());

  return (
    <div style={{ height: '100%' }}>
      <Grid container style={{ height: '100%' }}>
        <Grid item xs={4} sm={3} md={2}>
          <Sidebar activeKey={'task-assignments'} />
        </Grid>
        <Grid style={{ height: '100%' }} item container xs={8} sm={9} md={10} direction='column'>
          <Header />
          <Grid item container direction={'column'} style={{ flexGrow: 1 }}>
            <div>thống kê</div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

};

export default TaskAssignmentPage;