import React from 'react';
import PersonBox from './PersonBox';

const RightBox = () => {
  return (
    <div className='right-box'>
      <div className='search-box'>
        <input type='text' value='다솔' />
        <button>Search</button>
        <div>num: 3</div>
        <PersonBox />
        <PersonBox />
        <PersonBox />
      </div>
    </div>
  );
};

export default RightBox;
