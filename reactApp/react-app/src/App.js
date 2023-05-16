import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const App = ({ number = 0 }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Contained</Button>
      <Typography>{number}</Typography>
    </Stack>
  );
};

export default App;
