/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Grid, Box, Button, makeStyles, List, ListItem, Typography, Tabs, Tab, IconButton, Menu, MenuItem, Chip, Tooltip } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { DcpReport, Regulation } from '../common/interfaces';
import { DataGrid, GridColDef, GridValueFormatterParams } from '@material-ui/data-grid';
import { DcpReportsService } from '../common/api';
import { usePagingInfo, useFetch } from '../hooks';
import { formatDate, getDayOfWeek, formatTime } from '../common/utils/TimeHelper';
import SettingsIcon from '@material-ui/icons/Settings';
import ActionModal from '../components/Modal';
import { toast } from 'react-toastify';
import { comparers } from '../common/appConsts';
import { FindInPage } from '@material-ui/icons';
import StudentList from '../components/Modal/StudentList';


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
    '& .MuiDataGrid-root.MuiDataGrid-colCellMoving': {
      backgroundColor: 'inherit'
    }
  },

  dateCardContainer: {
    padding: theme.spacing(1, 2), 
    border: '1px solid #000',
    boxShadow: '2px 2px 6px #000',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white
    }
  },
  dateCardContainerActive: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
}));


const byClassCols: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Mã',
    hide: true
  },
  {
    field: 'assignedClass',
    headerName: 'Lớp trực',
    width: 120
  },
  {
    field: 'assignee',
    headerName: 'Cờ đỏ chấm ',
    flex: 1,
  },
  {
    field: 'assigneeClass',
    headerName: 'Thuộc lớp ',
    width: 120
  },
  {
    field: 'startTime',
    headerName: 'Bắt đầu từ',
    width: 150,
  },
  {
    field: 'endTime',
    headerName: 'Đến',
    width: 150,
  },
  {
    field: '',
    disableClickEventBubbling: true,
    hideSortIcons: true,
    align: 'center',
    renderCell: (params) => {
      return (
        <Tooltip title='Xem chi tiết'>
          <IconButton color='primary'>
            <FindInPage />
          </IconButton>
        </Tooltip>
      )
    }
  }
];

const byStudentCols: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Mã',
    hide: true
  },
  {
    field: 'assignee',
    headerName: 'Cờ đỏ chấm ',
    flex: 1,
  },
  {
    field: 'assigneeClass',
    headerName: 'Thuộc lớp ',
    width: 120
  },
  {
    field: 'assignedClass',
    headerName: 'Lớp trực',
    width: 240
  },
  {
    field: 'startTime',
    headerName: 'Bắt đầu từ',
    width: 150,
  },
  {
    field: 'endTime',
    headerName: 'Đến',
    width: 150,
  },
  {
    field: '',
    disableClickEventBubbling: true,
    hideSortIcons: true,
    align: 'center',
    renderCell: (params) => {
      return (
        <Tooltip title='Xem chi tiết'>
          <IconButton color='primary'>
            <FindInPage />
          </IconButton>
        </Tooltip>
      )
    }
  }
];

const DCPReportScheduleAssignment = () => {

  const classes = useStyles();
  const history = useHistory();

  const {pagingInfo, setPageIndex, setFilter} = usePagingInfo();
  const {loading, data, error, resetCache} = useFetch<DcpReport.DcpReportDto>(
    DcpReportsService.getMyDcpReports, 
    { ...pagingInfo, pageIndex: pagingInfo.pageIndex! + 1 }
  );
  const [selectedReport, setSelectedReport] = React.useState<DcpReport.DcpReportDto | null>(null);
  const [viewType, setViewType] = React.useState<string>('class');

  React.useEffect(() => {
    
    document.title = '2Cool | Phân công lịch trực cờ đỏ';
    
    
  }, []);

  const handleViewTypeOptionsClick = (mode: string) => {
    setViewType(mode);

    //...
  };

  return (
    <div style={{ height: '100%' }}>
      <Grid container className={classes.container}>
        <Grid item xs={4} sm={3} md={2}>
          <Sidebar activeKey={'report-schedule-assignment'} />
        </Grid>
        <Grid style={{ height: '100%' }} item container xs={8} sm={9} md={10} direction={'column'}>
          <Header />
          <Grid item container direction='column' style={{ flex: 1, minHeight: 0, flexWrap: 'nowrap' }}>
            <Grid item container justify='space-between' alignItems='center' className={classes.actionGroup}>
              <Grid item container direction='row' alignItems='center' style={{paddingTop: 12, paddingBottom: 12}}>
                <Chip 
                  clickable label='Lịch phân công theo lớp' 
                  onClick={() => handleViewTypeOptionsClick('class')}
                  variant={viewType === 'class' ? 'default' : 'outlined'} 
                  color={viewType === 'class' ? 'primary' : 'default'} style={{marginLeft: 16}}
                  />
                <Chip clickable label='Lịch phân công theo học sinh' 
                  onClick={() => handleViewTypeOptionsClick('student')}
                  variant={viewType === 'student' ? 'default' : 'outlined'} 
                  color={viewType === 'student' ? 'primary' : 'default'}
                  style={{marginLeft: 8}}
                />
              </Grid>

              <Grid item container alignItems='flex-end' justify='flex-end'>
                <Button 
                  variant={'contained'} 
                  color={'primary'}
                  onClick={() => history.push('dcp-report-creation')}>
                  Phân công lịch trực
                </Button>
              </Grid>
            </Grid>              
            <Grid item container direction={'row'} style={{ flex: 1, minHeight: 0, flexWrap: 'nowrap', padding: 16, paddingBottom: 0 }}>
              {
                viewType === 'class' && (
                  <Container className={classes.datagridContainer}>
                    <DataGrid
                      columns={byClassCols}
                      rows={data.items}
                      pageSize={data.pageSize} 
                      rowCount={data.totalCount}
                      // onPageChange={onPageChange}
                      loading={loading}
                      page={pagingInfo.pageIndex}
                      error={error}
                      // checkboxSelection
                      paginationMode='server'
                      // onRowSelected={changeSelection}
                      // selectionModel={selectedItems.map(el => el.id)}
                    />
                  </Container>
                )
              }
              {
                viewType === 'student' && (
                  <Container className={classes.datagridContainer}>
                    <DataGrid
                      columns={byStudentCols}
                      rows={data.items}
                      pageSize={data.pageSize} 
                      rowCount={data.totalCount}
                      // onPageChange={onPageChange}
                      loading={loading}
                      page={pagingInfo.pageIndex}
                      error={error}
                      // checkboxSelection
                      paginationMode='server'
                      // onRowSelected={changeSelection}
                      // selectionModel={selectedItems.map(el => el.id)}
                    />
                  </Container>
                )
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DCPReportScheduleAssignment;