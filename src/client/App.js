import React, { Component } from "react";

export default class App extends Component {
  state = { results: [] };

  componentDidMount() {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?apikey=1da960fc3c94640e494510ebdd8f619b"
    )
      .then(res => res.json())
      .then(result => this.setState({ results: result.data.results }));
  }

  render() {
    const { results } = this.state;
    console.log(results);
    return (
      <main>
        <header>img</header>
        <div>
          {results &&
            results.map(character => (
              <div key={character.id}>
                <div>{character.name}</div>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
              </div>
            ))}
        </div>
      </main>
    );
  }
}
