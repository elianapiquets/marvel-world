import React from 'react';
import styled from 'styled-components';
import MarvelLogo from '../assets/img/marvel.png';
import Search from './Search';

const HeaderBar = styled.header`
  width: 100%;
  display: block;
  background: ${props => props.theme.color.white};
  padding: 10px 0;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.26);
  display: flex;
`;

const Logo = styled.div`
  height: 37px;
  padding: 0 20px;
  border-right: 1px solid ${props => props.theme.color.gray_10};
  img {
    max-height: 100%;
    display: block;
  }

  @media (max-width: ${props => props.theme.breakpointSizes.xs.max}px) {
    height: 25px;
    padding: 0 15px;
  }
`;

function Header() {
  return (
    <HeaderBar>
      <Logo>
        <img src={MarvelLogo} alt="Marvel world" />
      </Logo>
      <Search />
    </HeaderBar>
  );
}
export default Header;
