import React, { createContext, Component } from 'react';

export const CharactersContext = createContext();

class CharactersContextProvider extends Component {
  state = { results: [] };

  componentDidMount() {
    fetch(
      'https://gateway.marvel.com/v1/public/characters?apikey=1da960fc3c94640e494510ebdd8f619b'
    )
      .then(res => res.json())
      .then(result => this.setState({ results: result.data.results }));
  }
  render() {
    return (
      <CharactersContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </CharactersContext.Provider>
    );
  }
}

export default CharactersContextProvider;
