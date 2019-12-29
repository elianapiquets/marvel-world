import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './components/Theme';
import { GlobalStyle } from './components/Globalstyle';
import Marvel from './containers/Marvel';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>
          <div id="portal-root"></div>
          <Marvel />
        </main>
      </ThemeProvider>
    );
  }
}
