import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Main } from './components';
import { AppThemeProvider } from './contexts/ThemeContext';
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";

export const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AppThemeProvider>
          <Main />
        </AppThemeProvider>
      </ApolloProvider>
    </BrowserRouter >
  );
}
