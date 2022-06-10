import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Main } from './components';
import { AppThemeProvider } from './contexts/ThemeContext';
import { AppLoadingProvider } from './contexts/LoadingContext';
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";

export const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AppThemeProvider>
          <AppLoadingProvider>
            <Main />
          </AppLoadingProvider>
        </AppThemeProvider>
      </ApolloProvider>
    </BrowserRouter >
  );
}
