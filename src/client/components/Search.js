import React, { Component } from 'react';
import styled from 'styled-components';
import SearchIcon from '../assets/img/magnifying-glass.svg';

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 120px);
  padding: 0 20px 0 15px;
  color: ${props => props.theme.color.gray_20};

  @media (max-width: ${props => props.theme.breakpointSizes.xs.max}px) {
    padding: 0 5px;
  }

  svg {
    margin: 10px;

    @media (max-width: ${props => props.theme.breakpointSizes.xs.max}px) {
      margin: 5px;
    }
  }
`;

const FocusContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
`;

const FocusInput = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: ${props => props.theme.color.primary};
  transition: width 0.4s;
`;

const Input = styled.input`
  color: ${props => props.theme.color.gray_50};
  font-size: 14px;
  border: none;
  padding: 10px;
  width: 100%;
  @media (max-width: ${props => props.theme.breakpointSizes.xs.max}px) {
    padding: 5px;
  }
  &:focus {
    outline: none;
  }

  &:focus ~ ${FocusInput} {
    width: 100%;
  }

  ::webkit-input-placeholder {
    color: ${props => props.theme.color.gray_30};
  }
  :-moz-placeholder {
    color: ${props => props.theme.color.gray_30};
    opacity: 1;
  }
  ::-moz-placeholder {
    color: ${props => props.theme.color.gray_30};
    opacity: 1;
  }
  :-ms-input-placeholder {
    color: ${props => props.theme.color.gray_30};
  }
  ::-ms-input-placeholder {
    color: ${props => props.theme.color.gray_30};
  }

  ::placeholder {
    color: ${props => props.theme.color.gray_30};
  }
`;

const Icon = styled.i`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 5px;
`;
export default class Search extends Component {
  render() {
    return (
      <SearchBar>
        <Icon>
          <img src={SearchIcon} alt="Buscar" />
        </Icon>
        <FocusContainer>
          <Input placeholder="Buscar" type="text" />
          <FocusInput />
        </FocusContainer>
      </SearchBar>
    );
  }
}
