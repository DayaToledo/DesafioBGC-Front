import React, { useState } from 'react';
import { LoginContext } from './contexts/LoginContext';

import './styles/global.css';
import Routes from './routes';

export default function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <LoginContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Routes />
    </LoginContext.Provider>
  );
}