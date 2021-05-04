import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Sidebar from '@components/Sidebar';
import Header from '@components/Header';
import PageTitleBar from '@components/PageTitleBar';
import DataGrid from '@components/DataGrid';

const RolesManagement = () => {

  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container style={{ flex: 1 }}>
        <Grid item xs={4} sm={3} md={2}>
          <Sidebar activeIndex={1} />
        </Grid>
        <Grid style={{ background: '#fff', flexGrow: 1 }} item container xs={8} sm={9} md={10} direction='column'>
          <Grid item >
            <Header />
          </Grid>
          <Grid item container direction='column' style={{ backgroundColor: '#DFE0EB', flexGrow: 1 }}>
            <Grid item>
              <PageTitleBar title={`Role & permission`} />
            </Grid>
            <Grid item style={{ flexGrow: 1 }}>
              <DataGrid />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    
  );
};

export default RolesManagement;