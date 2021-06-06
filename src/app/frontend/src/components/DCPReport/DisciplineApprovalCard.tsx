import React from 'react';
import { Button, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { Alarm as AlarmIcon, CheckSharp, Clear, PermContactCalendar as PermContactCalendarIcon,  } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import BxBxsBookReaderIcon from '../../assets/img/bx_bxs-book-reader.svg';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    border: `1px solid ${theme.palette.grey.A700}`,
    padding: theme.spacing(2, 4)
  },
  rejectBtn: {
    color: theme.palette.error.main,
    
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.error.main
    }
  },
  acceptBtn: {
    '&:hover':{
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main
    }
  }
}));

const DisciplineApprovalCard = () => {

  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container direction={'row'} className={classes.container} >
      <Grid item container direction={'row'} justify={'flex-start'} style={{flex: 4}}>
        <Grid item container alignItems={'center'} style={{flex: 1}}>
          <Grid item>
            <AlarmIcon />
          </Grid>
          <Grid item style={{marginLeft: 8}}>
            <Typography variant={'body1'} >10/03/2000 7:20</Typography>
          </Grid>
        </Grid>
        <Grid item container alignItems={'center'} style={{flex: 1}}>
          <Grid item>
            <PermContactCalendarIcon />
          </Grid>
          <Grid item style={{marginLeft: 8}}>
            <Typography variant={'body1'} >Nguyễn Xuân Tú</Typography>
          </Grid>
        </Grid>
        <Grid item container alignItems={'center'}>
          <Grid item>
            <img src={BxBxsBookReaderIcon} alt='icon' />
          </Grid>
          <Grid item style={{marginLeft: 8}}>
            <Typography variant={'body1'} >Lớp 10A1, Lớp 10A2, Lớp 10A3, ...</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction={'column'} style={{flex: 1}}>
        <Grid item>
          <IconButton className={classes.rejectBtn}>
            <Clear />
          </IconButton>
          <IconButton color={'primary'} className={classes.acceptBtn}>
            <CheckSharp />
          </IconButton>
        </Grid>
        <Grid item>
          <Button onClick={() => history.push('/dcp-report-approval/xyz')} 
            color={'primary'}>Xem chi tiết...</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DisciplineApprovalCard;