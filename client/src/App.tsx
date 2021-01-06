import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import GlobalsStyles from './styles/global';

import { Routes } from './routes';
import { AppProvider } from './hooks';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalsStyles />
  </BrowserRouter>
);
export default App;
