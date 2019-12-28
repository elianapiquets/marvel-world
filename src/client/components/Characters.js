import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { CharactersContext } from '../context/CharactersContext';

const CharactersContent = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: ${props => props.theme.breakpointSizes.xs.max}px) {
    margin: 15px;
  }
`;

const Characters = props => {
  return (
    <CharactersContext.Consumer>
      {context => {
        const { results } = context;
        return (
          <CharactersContent>
            {results &&
              results.map(character => (
                <Card character={character} key={character.id} />
              ))}
          </CharactersContent>
        );
      }}
    </CharactersContext.Consumer>
  );
};

export default Characters;
