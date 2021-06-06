import { Container, Grid, Box, Button, makeStyles, List, ListItem, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DisciplineApprovalCard from '../components/DCPReport/DisciplineApprovalCard';
import { Util } from '../common/interfaces';
import DCPReportClassCard from '../components/DCPReport/DCPReportClassCard';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Alarm, CheckSharp, Clear, PermContactCalendar } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',

    '& .MuiGrid-container': {
      flexWrap: 'nowrap'
    }
  },
  actionGroup: {
    padding: theme.spacing(2, 4),
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  list: {
    // overflowY: 'scroll'
    // padding: '20px 100px' 
  },
  datagridContainer: {
    // height: '100%', 
    width: '100%',
    '& .MuiDataGrid-columnSeparator': {
      display: 'none'
    },
    '& .MuiDataGrid-colCellTitle': {
      fontWeight: 700,
    },
    '& .MuiDataGrid-root': {
      border: 'none',
      '& .MuiDataGrid-withBorder': {
        borderRight: 'none',
      }
    },
  },
  dcpReportAction: {
    padding: theme.spacing(2), 
    borderTop: `1px solid ${theme.palette.divider}`
  },
  acceptBtn: {
    padding: theme.spacing(1,4),
  },
  rejectBtn: {
    padding: theme.spacing(1,3),
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    }
  }
}));

const data = Array.from(Array(25), (_, i) => i + 1).map(x => ({
  id: x,
  fault: 'Trực nhật chậm',
  students: 'Lê Anh Tuấn, Nguyễn Xuân Tú, ...'
}));

const cols: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Mã',
    // width: 0,
    hide: true
  },
  {
    field: 'fault',
    headerName: 'Vi phạm',
    flex: 1,
    // width: 200
  },
  {
    field: 'students',
    headerName: 'Học sinh vi phạm',
    flex: 1,
    // width: 200
  }
];

const DCPReportPage = () => {

  const classes = useStyles();
  const params = useParams() as Util.IObject;

  React.useEffect(() => {
    document.title = '2Cool | Chi tiết phiếu chấm điểm nề nếp';
    console.log({params});
    const dcpReportId = params.dcpReportId;

    console.log({dcpReportId}); 
  }, []);

  const [ dateFilter, setDateFilter ] = React.useState<Date | null>(new Date());

  return (
    <div style={{ height: '100%' }}>
      <Grid container className={classes.container}>
        <Grid item xs={4} sm={3} md={2}>
          <Sidebar activeKey={'discipline-approval'} />
        </Grid>
        <Grid style={{ height: '100%' }} item container xs={8} sm={9} md={10} direction={'column'}>
          <Header />
          <Grid item container direction={'column'} style={{ flex: 1, minHeight: 0, flexWrap: 'nowrap' }}>
            <Grid item container  className={classes.actionGroup}>
              <Grid item container direction={'row'} alignItems={'center'}>
                <Alarm style={{ marginRight: 8 }}/>
                <Typography variant={'body2'}>Chấm lúc 6:59 02/06/2020</Typography>
              </Grid>
              <Grid item container direction={'row'} alignItems={'center'}>
                <PermContactCalendar style={{ marginRight: 8 }}/>
                <Typography variant={'body2'}>Nguyễn Xuân Tú</Typography>
              </Grid>
            </Grid>              
            <Grid item container direction={'row'} style={{ flex: 1, minHeight: 0, flexWrap: 'nowrap', padding: 16, paddingBottom: 0 }}>
              <Grid item style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
                <List className={classes.list}>
                  {
                    [1,2,3,4,5,6,7,8,9,10,].map(el => (
                    <ListItem key={el}>
                      <DCPReportClassCard />
                    </ListItem>))
                  }
                </List>
              </Grid>
              <Grid item container direction={'column'} style={{ flex: 3, flexWrap: 'nowrap' }}>
                <Grid item style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
                  <Container className={classes.datagridContainer}>
                    <DataGrid
                      columns={cols}
                      rows={data}
                      autoHeight
                      disableExtendRowFullWidth
                      hideFooterPagination
                      disableColumnFilter
                      disableColumnMenu
                      hideFooterSelectedRowCount
                    />
                  </Container>
                </Grid>
                <Grid item container justify={'flex-end'} className={classes.dcpReportAction}>
                  <Button className={classes.rejectBtn} startIcon={<Clear />}>Từ chối</Button>
                  <Button className={classes.acceptBtn} startIcon={<CheckSharp/>}variant={'contained'} color={'primary'}>Duyệt</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DCPReportPage;