import React from 'react';

const Box = (props) => {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img
        className='item-img'
        src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbd66bF%2Fbtr5D2kASZx%2FUaY4Sb3vnSYBbVCrLkay4K%2Fimg.png'
      />
      <h2>win</h2>
    </div>
  );
};

export default Box;
