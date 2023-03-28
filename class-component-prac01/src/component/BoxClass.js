import React, { Component } from 'react';

export default class BoxClass extends Component {
  componentWillUnmount() {
    console.log('componentWillUnmount'); // class컴포넌트 Unmounting 확인
  }
  render() {
    return <div>Box{this.props.number}</div>;
  }
}
