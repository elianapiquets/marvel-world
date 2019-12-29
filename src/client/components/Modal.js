import React, { Component } from 'react';
import styled from 'styled-components';
import CloseX from '../assets/img/close-button.svg';

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: modalFade;
  animation-duration: 0.4s;
  overflow: hidden;

  @keyframes modalFade {
    from {
      transform: translateY(0);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  margin: 100px;
  min-height: 300px;
  background: white;
  z-index: 500;
  position: relative;
  max-height: 100%;
  overflow-y: auto;

  @media (max-width: ${props => props.theme.breakpointSizes.md.max}px) {
    margin: 20px;
  }
`;

export const Close = styled.button`
  width: 45px;
  height: 45px;
  position: absolute;
  right: 0;
  top: 0;
  text-shadow: none;
  outline: 0;
  padding: 15px;
  cursor: pointer;
  background: 0 0;
  border: 0;
  -webkit-appearance: none;

  &:hover {
    color: ${props => props.theme.color.gray_70};
  }

  img {
    max-width: 100%;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.7;
  cursor: pointer;
`;
export default class Modal extends Component {
  render() {
    const { children, onClose } = this.props;
    return (
      <ModalContainer>
        <ModalContent>
          <Close onClick={onClose}>
            <img src={CloseX} alt="Cerrar" />
          </Close>
          {children}
        </ModalContent>
        <Backdrop onClick={onClose} />
      </ModalContainer>
    );
  }
}
