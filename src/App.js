import React from 'react';
import { AppProvider } from './contexts/AppContext';

import './styles/global.css';
import Routes from './routes';

export default function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}