import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends Component {
  componentDidMount() {
    this.element = document.getElementById('portal-root');
  }

  render() {
    console.log(this.element);

    return <div>sd</div>;
    //return ReactDOM.createPortal(this.props.children, this.element);
  }
}
