import { Container, Grid, Box, Button, makeStyles, List, ListItem, Typography, Chip } from '@material-ui/core';
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
import { Alarm, CheckSharp, ChevronRight, Clear, PermContactCalendar } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',

    '& .MuiGrid-container': {
      flexWrap: 'nowrap'
    }
  },
  actionGroup: {
    padding: theme.spacing(1, 4),
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
  dcpReportClassFilter: {
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '100%',
    padding: theme.spacing(2), 
    borderTop: `1px solid ${theme.palette.divider}`,
    overflowX: 'auto',
    scrollbarWidth: 'none',
    minWidth: 0,
    '&::-webkit-scrollbar': {
      display: 'none',
    }
  },
  classFilter: {
    margin: theme.spacing(1, 1, 1, 0),
  },

  dateCardContainer: {
    padding: theme.spacing(2, 4), 
    border: '1px solid #000',
    borderRadius: 20, 
    boxShadow: '2px 2px 6px #000',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    }
  }
}));

const faultData = Array.from(Array(25), (_, i) => i + 1).map(x => ({
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

const DateCard = ({date}: {date?: string | Date}) => {
  const classes = useStyles();
  return (
    <Grid container alignItems={'center'} className={classes.dateCardContainer}>
      <Typography variant={'body2'}>Ngày 02/06/2021</Typography>
      <ChevronRight style={{ marginLeft: 16 }} />
    </Grid>
  );
};

const dateData =  Array.from(Array(25), (_, i) => i + 1).map(x => (<DateCard />));

const MyDCPReportPage = () => {

  const classes = useStyles();
  const params = useParams() as Util.IObject;

  React.useEffect(() => {
    document.title = '2Cool | Lịch sử chấm phiếu chấm điểm của tôi';
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
            <Grid item container justify={'space-between'} alignItems={'center'} className={classes.actionGroup}>
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
                Tạo phiếu chấm nề nếp
              </Button>
            </Grid>              
            <Grid item container direction={'row'} style={{ flex: 1, minHeight: 0, flexWrap: 'nowrap', padding: 16, paddingBottom: 0 }}>
              <Grid item style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
                <List className={classes.list}>
                  {
                    [1,2,3,4,5,6,7,8,9,10,].map(el => (
                    <ListItem key={el}>
                      <DateCard />
                    </ListItem>))
                  }
                </List>
              </Grid>
              <Grid item container direction={'column'} alignItems={'stretch'} style={{ flex: 3 }}>
                <Grid item style={{ flex: 1, minHeight: 0, minWidth: 0, overflowY: 'auto' }}>
                  <Container className={classes.datagridContainer}>
                    <DataGrid
                      columns={cols}
                      rows={faultData}
                      autoHeight
                      disableExtendRowFullWidth
                      hideFooterPagination
                      disableColumnFilter
                      disableColumnMenu
                      hideFooterSelectedRowCount
                    />
                  </Container>
                </Grid>
                <Grid item container className={classes.dcpReportClassFilter} style={{flexWrap: 'wrap'}}>
                  {/* <Button className={classes.rejectBtn} startIcon={<Clear />}>Từ chối</Button>
                  <Button className={classes.acceptBtn} startIcon={<CheckSharp/>}variant={'contained'} color={'primary'}>Duyệt</Button> */}
                  {
                    Array.from(Array(20), (_, i) => (
                      <Chip
                        key={`$class-{i}`}
                        clickable
                        variant={i === 0 ? 'default' : 'outlined'}
                        color={'primary'}
                        label={`Lớp 10A${i}`}
                        className={classes.classFilter}
                      />
                    ))
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyDCPReportPage;