import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Main } from './components';
import AuthAppContext from './contexts/AuthContext'
import { AppThemeProvider } from './contexts/ThemeContext';

export const App = () => {
  return (
    <BrowserRouter>
      <AuthAppContext>
        <AppThemeProvider>
          <Main />
        </AppThemeProvider>
      </AuthAppContext>
    </BrowserRouter >
  );
}
