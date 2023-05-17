import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const App = () => {
  const [djangoData, setDjangoData] = useState();

  const onClick = async () => {
    const resp = await fetch('http://localhost:8000/', { method: 'POST' })
      .then((response) => response.json())
      .then((data) => {
        // Faites quelque chose avec les données JSON reçues
        setDjangoData(data['message']);
      });
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onClick}>
        Contained
      </Button>
      <Typography>Data from django : {djangoData}</Typography>
    </Stack>
  );
};

export default App;
