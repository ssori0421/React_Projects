import React from 'react';
import { useSelector } from 'react-redux';

const Box = () => {
  let count = useSelector((state) => state.count);
  return <div>여기는 Box컴포넌트 : {count}</div>;
};

export default Box;
