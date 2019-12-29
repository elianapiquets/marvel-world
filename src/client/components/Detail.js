import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 25px;
`;

const Image = styled.img`
  display: inline-block;
  width: 200px;
  vertical-align: top;

  @media (max-width: ${props => props.theme.breakpointSizes.sm.max}px) {
    display: none;
  }
`;

const Content = styled.div`
  display: inline-block;
  width: calc(100% - 205px);
  padding-left: 25px;

  @media (max-width: ${props => props.theme.breakpointSizes.sm.max}px) {
    width: 100%;
    padding-left: 0;
  }
`;

const Name = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: ${props => props.theme.color.gray_70};
`;

const Description = styled.h2`
  font-size: 13px;
  font-weight: 400;
  margin: 0 0 10px 0;
  color: ${props => props.theme.color.gray_70};
`;

const Comics = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0 10px 0;
  color: ${props => props.theme.color.gray_70};
`;

const List = styled.ul`
  font-size: 12px;
  color: ${props => props.theme.color.gray_70};
`;
export default class Detail extends Component {
  render() {
    const { character } = this.props;
    return (
      <Container>
        <Image
          alt={character.name}
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        />
        <Content>
          <Name>{character.name}</Name>
          <Description>{character.description}</Description>
          <Comics>Comics</Comics>
          <List>
            {character.comics.items.map((comic, index) => (
              <li key={index}>{comic.name}</li>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
