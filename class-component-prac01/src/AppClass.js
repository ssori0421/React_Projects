import React, { Component } from 'react';
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter2: 0,
      num: 1,
      value: 0,
    };
    console.log('constructor'); // class컴포넌트 Mounting 확인
  }
  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
    console.log('increase', this.state); // useStatete는 비동기적으로 실행되므로 바로 반영 안됨!
  };

  componentDidMount() {
    console.log('componentDidMount'); // class컴포넌트 Mounting 확인
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.state); // class컴포넌트 Updating 확인
  }

  render() {
    console.log('render'); // class컴포넌트 Mounting, Updating 확인
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        {this.state.counter2 < 3 && <BoxClass number={this.state.value} />}
      </div>
    );
  }
}
