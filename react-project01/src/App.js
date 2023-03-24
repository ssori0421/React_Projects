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
  const play = (userChoice) => {
    // console.log('선택', userChoice);
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className='Box-Wrap'>
        <Box title='You' item={userSelect} />
        {/*   */}
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
