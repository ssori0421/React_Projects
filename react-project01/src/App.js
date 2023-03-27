import { useState } from 'react';
import './App.css';
import Box from './component/Box';

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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };
  const judgement = (user, computer) => {
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

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // choice객체의 key값만 뽑아서 배열로 반환하는 함수
    console.log('item array', itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length); // 0, 1, 2
    console.log('random value', randomItem);
    let final = itemArray[randomItem]; // itemArray의 인덱스 번호에 해당하는 item 반환하는 함수
    console.log('final', final);
    return choice[final]; // item객체가 computerChoice의 반환값이 됨
  };
  return (
    <div>
      <div className='Box-Wrap'>
        <Box title='You' item={userSelect} result={result} />
        <Box title='Computer' item={computerSelect} result={result} />
      </div>
      <div className='Button-wrap'>
        {/* play함수의 매개변수: scissors, rock, paper */}
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('papper')}>보</button>
      </div>
    </div>
  );
}

export default App;
