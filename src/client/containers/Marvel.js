import React, { Component } from 'react';
import Header from '../components/Header';
import Characters from '../components/Characters';
import CharactersContextProvider from '../context/CharactersContext';

export default class Marvel extends Component {
  render() {
    return (
      <CharactersContextProvider>
        <Header />
        <Characters />
      </CharactersContextProvider>
    );
  }
}
