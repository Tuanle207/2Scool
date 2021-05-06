import React from 'react';
import { DataGrid as RawDataGrid, GridColDef, GridPageChangeParams } from '@material-ui/data-grid';
import { Container, makeStyles } from '@material-ui/core';
import { ReqBody } from '@common/interfaces';
import { CoursesService } from '@common/api';
import { useFetch } from '@common/hooks';

const cols: GridColDef[] =  [
  {
    field: 'id',
    headerName: 'Mã',
    width: 150
  },
  {
    field: 'name',
    headerName: 'Tên khóa học',
    width: 300
  },
  {
    field: 'startTime',
    headerName: 'Thời gian bắt đầu',
    width: 150
  },
  {
    field: 'finishTime',
    headerName: 'Thời gian kết thúc',
    width: 150
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%', 
    width: '100%',
    '& .MuiDataGrid-iconSeparator': {
      color: theme.palette.divider,
      
      '&:hover': {
        color: theme.palette.common.black
      }
    },
    '& .MuiDataGrid-colCell': {
      // borderRight: '1px solid #303030',
    },
    '& .MuiDataGrid-colCellTitle': {
      fontWeight: 700,
    }
  }
}));

const DataGrid = () => {

  const [pagingInfo, setPagingInfo] = React.useState<ReqBody.PagingInfo>({
    pageIndex: 0,
    pageSize: 5
  });

  const classes = useStyles();

  const {loading, data, error} = useFetch(
    CoursesService.getAllCourses, 
    JSON.stringify({ ...pagingInfo, pageIndex: pagingInfo.pageIndex! + 1 })
  );
  

  const onPageChange = (params: GridPageChangeParams) => {
    setPagingInfo(prev => ({...prev, pageIndex: params.page}));
  };

  return (
    <Container className={classes.root}>
      <RawDataGrid
        columns={cols}
        rows={data.items}
        pageSize={data.pageSize} 
        rowCount={data.totalCount}
        onPageChange={onPageChange}
        loading={loading}
        page={pagingInfo.pageIndex}
        error={error}
        checkboxSelection
        paginationMode='server'
      />
    </Container>
  );
};

export default DataGrid;