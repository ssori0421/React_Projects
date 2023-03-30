import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>Homepage입니다.</h1>
      <Link to='/about'>Go to about page</Link>
    </div>
  );
};

export default Homepage;
