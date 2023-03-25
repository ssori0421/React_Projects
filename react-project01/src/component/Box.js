import React from 'react';

const Box = (props) => {
  console.log('props', props); // props 객체의 item 속성 확인
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img className='item-img' src={props.item && props.item.img} />
      <h2>win</h2>
    </div>
  );
};

export default Box; 
