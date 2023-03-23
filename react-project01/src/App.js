import './App.css';
import Box from './component/Box';

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlIkI8%2Fbtr5E9wZ4Tu%2FO2LmLWZEvRh5kk79KILOFK%2Fimg.png',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FyshIl%2Fbtr5HsJPmlG%2FmQfkz6rqgPHo9pp6T40Xo1%2Fimg.png',
  },
  papper: {
    name: 'Papper',
    img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkzKeo%2Fbtr5HsC3Nec%2FNYmAjmqIG66i44KGiqIMgK%2Fimg.png',
  },
};
function App() {
  const play = (userChoice) => {
    console.log('선택', userChoice);
  };

  return (
    <div>
      <div className='Box-Wrap'>
        <Box title='You' />
        <Box title='Computer' />
      </div>
      <div className='Button-wrap'>
        {/* play함수의 매개변수: scissors, rock, paper */}
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
