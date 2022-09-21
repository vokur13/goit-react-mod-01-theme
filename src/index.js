import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: { text: 'black', accent: 'orangered' },
  fonts: {
    body: 'Helvetica, sans-serif',
    title: ' Tacoma,sans-serif',
    monospace: 'monospace',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
