import React from 'react'

const LeftBox = () => {
  return (
    <div className='left-box'>
    <label>Name</label>
    <input type='text' value='다솔' />
    <label>Phone Number</label>
    <input type='number' value='1234567' />
    <button className='create-button'>Create</button>
  </div>
  )
}

export default LeftBox
