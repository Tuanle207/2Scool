import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Sidebar from '@components/Sidebar';

const View2 = () => {

  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container style={{ flex: 1 }}>
        <Grid item xs={4} sm={3} md={2}>
          <Sidebar activeIndex={2}/ >
        </Grid>
        <Grid style={{ background: 'orange' }} item xs={8} sm={9} md={10}>
          <Typography variant='h4'>View 2</Typography>
        </Grid>
      </Grid>
    </div>
    
  );
};

export default View2;