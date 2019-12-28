import React, { createContext, Component } from 'react';

export const CharactersContext = createContext();

class CharactersContextProvider extends Component {
  state = {
    characters: []
  };
  searchByName = e => {
    e.preventDefault();
    if (e.target.value === '') {
      return this.getCharacters();
    }
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?name=${e.target.value}&apikey=1da960fc3c94640e494510ebdd8f619b`
    )
      .then(data => data.json())
      .then(data => this.setState({ characters: [...data.data.results] }));
  };

  searchTerm = e => this.setState({ searchName: e.target.value });

  getCharacters = () => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=1da960fc3c94640e494510ebdd8f619b`
    )
      .then(data => data.json())
      .then(data => this.setState({ characters: [...data.data.results] }));
  };

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    return (
      <CharactersContext.Provider
        value={{
          ...this.state,
          searchByName: this.searchByName
        }}
      >
        {this.props.children}
      </CharactersContext.Provider>
    );
  }
}

export default CharactersContextProvider;
