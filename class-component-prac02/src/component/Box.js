import React from 'react';

const Box = (props) => {
  let result;
  if (
    props.title === 'Computer' &&
    props.result !== 'tie' &&
    props.result !== ''
  ) {
    result = props.result === 'win' ? 'lose' : 'win';
  } else {
    result = props.result;
  }
  console.log('props', props); // props 객체의 item 속성 확인

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className='item-img' src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
