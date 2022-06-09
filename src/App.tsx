import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Main } from './components';
import { AppThemeProvider } from './contexts/ThemeContext';

export const App = () => {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <Main />
      </AppThemeProvider>
    </BrowserRouter >
  );
}
