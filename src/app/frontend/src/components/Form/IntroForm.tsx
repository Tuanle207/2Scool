import { Button, Container, MobileStepper, Typography } from '@material-ui/core';
import React from 'react';
import useIntroFormStyles from '@assets/jss/components/Form/useIntroFormStyles';

interface Props {
  history: any;
}

const IntroForm: React.FC<Props> = ({ history }) => {

  const styles = useIntroFormStyles();

  return (
    <Container className={styles.formContainer}>
      <form className={styles.form}>
        <Typography variant='h4'>Welcome to SCOOL</Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum adipisci totam quia fuga esse, ex natus repellendus minima hic ducimus recusandae omnis est in! Reiciendis facere placeat maxime minus numquam.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, modi nostrum consectetur delectus officiis, ab natus libero, totam rem minus alias unde aut? Minus odio temporibus perferendis eum praesentium. Quibusdam?
        </p>
        <Button
          variant='outlined'
          color='primary'
          type='submit'
          disableElevation
          className={styles.button}
        >
          Tìm hiểu thêm
        </Button>
      </form>
    </Container>
  );
};

export default IntroForm;