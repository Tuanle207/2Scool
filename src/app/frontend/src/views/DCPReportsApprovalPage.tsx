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


const DCPReportsApprovalPage = () => {
  
  const classes = useStyles();

  React.useEffect(() => {
    document.title = '2Cool | Duyệt phiếu chấm điểm nề nếp';
  }, []);

  const [ dateFilter, setDateFilter ] = React.useState<Date | null>(new Date());

  return (
    <div style={{ height: '100%' }}>
      <Grid container style={{ height: '100%' }}>
        <Grid item xs={4} sm={3} md={2}>
          <Sidebar activeKey={'discipline-approval'} />
        </Grid>
        <Grid style={{ height: '100%' }} item container xs={8} sm={9} md={10} direction='column'>
          <Header />
          <Grid item container direction={'column'} style={{ flexGrow: 1 }}>
            <Grid item container direction={'row'} justify={'space-between'} alignItems={'center'} className={classes.actionGroup}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Box>
                  <KeyboardDatePicker
                    disableToolbar
                    fullWidth
                    variant="dialog"
                    format="dd/MM/yyyy"
                    margin="dense"
                    id="get-discipline-report-filter"
                    label="Chọn ngày chấm"
                    value={dateFilter}
                    onChange={date => setDateFilter(date)}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Box>
              </MuiPickersUtilsProvider>
              <Button variant={'contained'} color={'primary'}>
                Duyệt tất cả
              </Button>
            </Grid>              
            <Grid item style={{ flex: '1 1 0', minHeight: 0, overflowX: 'hidden', overflowY: 'scroll' }}>
              <List className={classes.list}>
                {
                  [1,2,3,4,5,6,7,8,9,10,].map(el => (
                  <ListItem key={el}>
                    <DisciplineApprovalCard />
                  </ListItem>))
                }
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

};

export default DCPReportsApprovalPage;