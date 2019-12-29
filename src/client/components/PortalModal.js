import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

function PortalModal(props) {
  const { open } = props;
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <Modal {...props} />,
    document.querySelector('#portal-root')
  );
}
export default PortalModal;
