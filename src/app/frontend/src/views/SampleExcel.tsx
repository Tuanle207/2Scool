import React from 'react';
import { Button, Container, Grid, Input, Typography } from '@material-ui/core';
import Sidebar from '@components/Sidebar';
import Header from '@components/Header';
import { SampleService } from '@common/api';

const SampleExcel = () => {

  const [file, setFile] = React.useState<any>(null);

  const handleOnFileChange = (e: any) => {
    const files = Array.from(e.target.files)
    console.log({files});
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const sumbit = () => {
    SampleService.uploadExcelFile({
      test: 'test test',
      title:  'titlt tile',
      file1: file
    }).then(data => console.log({data}));
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container style={{ flex: 1 }}>
        <Grid item xs={4} sm={3} md={2}>
          <Sidebar activeIndex={3} />
        </Grid>
        <Grid style={{ background: '#fff' }} item container xs={8} sm={9} md={10} direction='column'>
          <Grid item style={{ flex: 1 }}>
            <Header />
            <Grid item style={{ flex: 1 }}>
              <Container style={{display: 'flex', justifyContent: 'center', justifyItems: 'center'}}>
                <Input type='file' placeholder='choose file' onChange={handleOnFileChange}/>
                <Button variant='outlined' onClick={sumbit}>Call api</Button>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    
  );
};

export default SampleExcel;