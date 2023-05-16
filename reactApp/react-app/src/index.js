import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Stack } from '@mui/material';

const number = JSON.parse(document.getElementById('reactTest').textContent);
console.log('number : ', number);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Stack>
    <App number={number} />
  </Stack>
);
