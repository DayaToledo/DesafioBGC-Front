import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AppProvider } from './contexts/AppContext';

import './styles/global.css';
import Routes from './routes';

export default function App() {
  return (
    <AppProvider>
      <Routes />
      <ToastContainer />
    </AppProvider>
  );
}