import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fpjwah%2Fbtr5PaQSQhA%2FUhNJwVFscOYWh7y8vAsvd1%2Fimg.png',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FO1fxR%2Fbtr5N4KCpZ1%2FnVgmP96qZKDKgnHG9jJGu0%2Fimg.png',
  },
  papper: {
    name: 'Papper',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmRJgA%2Fbtr5N7NTKuK%2FZF2wfKbjyBuEzyrm1QqRuK%2Fimg.png',
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: '',
    };
  }
  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };
  judgement = (user, computer) => {
    console.log('user', user, 'computer', computer); // 객체
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock')
      return computer.name === 'Scissors' ? 'win' : 'lose';
    else if (user.name === 'Scissors')
      return computer.name === 'Papper' ? 'win' : 'lose';
    else if (user.name === 'Papper')
      return computer.name === 'Rock' ? 'win' : 'lose';
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice); // choice객체의 key값만 뽑아서 배열로 반환하는 함수
    console.log('item array', itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length); // 0, 1, 2
    console.log('random value', randomItem);
    let final = itemArray[randomItem]; // itemArray의 인덱스 번호에 해당하는 item 반환하는 함수
    console.log('final', final);
    return choice[final]; // item객체가 computerChoice의 반환값이 됨
  };

  render() {
    return (
      <div>
        <div className='Box-Wrap'>
          <BoxClass
            title='You'
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title='Computer'
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className='Button-wrap'>
          {/* play함수의 매개변수: scissors, rock, paper */}
          <button onClick={() => this.play('scissors')}>가위</button>
          <button onClick={() => this.play('rock')}>바위</button>
          <button onClick={() => this.play('papper')}>보</button>
        </div>
      </div>
    );
  }
}
