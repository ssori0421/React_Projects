import { useState, useEffect } from 'react';
import './App.css';

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
  };

  useEffect(() => {
    console.log('useEffect1');
  }, []);

  useEffect(() => {
    console.log('useEffect2');
  }, [counter2]);

  return (
    <div>
      {console.log('render')}
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
