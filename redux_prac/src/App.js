import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

import './App.css';

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const increaseCount = () => {
    dispatch({ type: 'INCREMENT', payload: { num: 5 } });
  };
  const login = () => {
    dispatch({ type: 'LOGIN', payload: { id: 'dasol', password: '123' } });
  };
  return (
    <div>
      <h1>
        {id},{password}
      </h1>
      <span>{count}</span>
      <button onClick={increaseCount}>count!</button>
      <button onClick={login}>Login!</button>
      <Box />
    </div>
  );
}

export default App;
