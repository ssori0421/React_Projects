import React from 'react';
import PersonBox from './PersonBox';
import { useSelector } from 'react-redux';

const RightBox = () => {
  const contactList = useSelector((state) => state.contactList);
  return (
    <div className='right-box'>
      <div className='search-box'>
        <input type='text' placeholder='이름을 입력해주세요' />
        <button>Search</button>
        <div>num: {contactList.length}</div>
        {contactList.map((item) => (
          <PersonBox item={item} />
        ))}
      </div>
    </div>
  );
};

export default RightBox;
