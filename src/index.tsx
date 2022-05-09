import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);




root.render(
  <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>

    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
          </LocalizationProvider>
  </ThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
