import React from 'react';
import styled from 'styled-components';

const CardContent = styled.a`
  width: calc(25% - 30px);
  background: ${props => props.theme.color.white};
  margin: 15px;
  min-height: 30px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 200ms ease-in;
  transform: scale(1);

  @media (max-width: ${props => props.theme.breakpointSizes.md.max}px) {
    width: calc(33% - 30px);
  }

  @media (max-width: ${props => props.theme.breakpointSizes.sm.max}px) {
    width: calc(50% - 30px);
  }
  @media (max-width: ${props => props.theme.breakpointSizes.xs.max}px) {
    width: 100%;
    margin: 15px 0;
    flex-direction: row;
  }

  &:hover {
    transition: all 200ms ease-in;
    transform: scale(1.02);
  }
`;

const Image = styled.div`
  display: block;
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  background: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;

  @media (max-width: ${props => props.theme.breakpointSizes.xs.max}px) {
    width: 150px;
    height: 80px;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 75px;
  padding: 10px;

  @media (max-width: ${props => props.theme.breakpointSizes.xs.max}px) {
    height: auto;
    text-align: left;
    width: 100%;
  }
`;

const Tools = styled.span`
  color: ${props => props.theme.color.gray_30};
  font-size: 12px;
  display: block;
`;

const Name = styled.h3`
  color: ${props => props.theme.color.gray_70};
  font-size: 13px;
  font-weight: 600;
  margin: 10px 0 0 0;
`;

function Card(props) {
  const { character } = props;
  return (
    <CardContent>
      <Image
        imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      />
      <Information>
        <Tools>Tools</Tools>
        <Name>{character.name}</Name>
      </Information>
    </CardContent>
  );
}
export default Card;
