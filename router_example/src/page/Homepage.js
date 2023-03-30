import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const goToProductPage = () => {
    navigate('/products?q=pants');
  };
  
  return (
    <div>
      <h1>HomePage입니다.</h1>
      <Link to='/about'>Go to AboutPage</Link>
      <button onClick={goToProductPage}>go to ProductPage </button>
    </div>
  );
};

export default HomePage;
