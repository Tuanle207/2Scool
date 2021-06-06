import { Grid, makeStyles, Typography } from '@material-ui/core';
import BxBxsBookReaderIcon from '../../assets/img/bx_bxs-book-reader.svg';
import React from 'react';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
    border: '1px solid #000',
    cursor: 'pointer',
    borderRadius: 20,
    boxShadow: '2px 2px 6px #000',
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  textWrapper: {
    marginLeft: theme.spacing(1)
  }
}));

const DCPReportClassCard = () => {
  
  const classes = useStyles();

  return  (
    <Grid container alignItems={'center'} justify={'center'} className={classes.container}>
      <Grid item>
        <img src={BxBxsBookReaderIcon} alt='icon' />
      </Grid>
      <Grid item className={classes.textWrapper}>
        <Typography variant={'body2'}>Lớp 10A1</Typography>
      </Grid>
    </Grid>
  );
};

export default DCPReportClassCard;