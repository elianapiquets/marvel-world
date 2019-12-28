import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import theme from './components/Theme';
import { GlobalStyle } from './components/Globalstyle';
import Characters from './components/Characters';
import CharactersContextProvider from './context/CharactersContext';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>
          <Header />
          <CharactersContextProvider>
            <Characters />
          </CharactersContextProvider>
        </main>
      </ThemeProvider>
    );
  }
}
