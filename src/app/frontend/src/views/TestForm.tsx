import React from 'react';
import { TextField } from '@material-ui/core';
import ModalAction from '@components/Modal';

const TestForm = () => {
  
  const [name1, setName1] = React.useState<string>('');
  const [name2, setName2] = React.useState<string>('');

  React.useEffect(() => {
    ModalAction.setData({
      data: {
        name1,
        name2
      },
      error: {
        error: true,
        msg: 'loi gi day'
      }
    })
  }, [ name1, name2 ]);

  return (
    <form noValidate autoComplete="off">
      <TextField 
        id="name1" 
        label="Standard" 
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />
      <TextField 
        id="name2" 
        label="Filled" 
        variant="filled"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
    </form>
  )
};

export default TestForm;