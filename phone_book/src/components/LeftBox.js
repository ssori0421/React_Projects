import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const LeftBox = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();
  const addContact = (event) => {
    event.preventDefault();
    // dispatch({type:"ADD_CONTACT",payload:{name:name, phoneNumber:phoneNumber}})
    dispatch({
      type: 'ADD_CONTACT',
      payload: { name: name, phoneNumber: phoneNumber },
    });
  };

  return (
    <form className='left-box' onSubmit={addContact}>
      <label>Name</label>
      <input
        type='text'
        placeholder='이름을 입력해 주세요'
        onChange={(event) => setName(event.target.value)}
      />
      <label>Phone Number</label>
      <input
        type='number'
        placeholder='전화번호를 입력해 주세요'
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <button className='create-button' type='onSubmit'>
        Create
      </button>
    </form>
  );
};

export default LeftBox;
