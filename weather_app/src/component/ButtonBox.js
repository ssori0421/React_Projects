import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonBox = ({ cities }) => {
  console.log(cities);
  return (
    <div>
      <Button variant='warning'>Current Location</Button>
      {/* <Button variant='warning'>paris</Button>
      <Button variant='warning'>new york</Button> */}
      {cities.map((item) => (
        // console.log(item) // paris, new york, tokyo, seoul
        <Button variant='warning'>{item}</Button>
      ))}
    </div>
  );
};

export default ButtonBox;
