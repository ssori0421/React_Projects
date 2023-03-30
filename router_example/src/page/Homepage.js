import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>HomePage입니다.</h1>
      <Link to='/about'>Go to AboutPage</Link>
    </div>
  );
};

export default HomePage;
