import React from 'react';
import { DataGrid as RawDataGrid, GridRowProps, GridColDef } from '@material-ui/data-grid';
import { Container, makeStyles } from '@material-ui/core';

const roles = {
  data: Array.from(Array(10).keys()).map((el) => ({
      id: el,
      name: `admin ${el}`,
      description: `admin ${el}`
  })),
  totalItems: 125,
  totalPages: 7,
  pageLimit: 20,
  pageIndex: 1
}

const rows = roles.data;

const cols: GridColDef[] =  [
  {
    field: 'name',
    headerName: 'Tên',
    width: 150
  },
  {
    field: 'description',
    headerName: 'Mô tả',
    width: 150
  },
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

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <RawDataGrid
        rows={rows} 
        columns={cols} 
        pageSize={5} 
        checkboxSelection 
      />
    </Container>
  );
};

export default DataGrid;