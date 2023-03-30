import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams(); // Destructuring을 사용해 변수에 필요한 값만 전달
  // console.log('params', params); // params는 object
  return (
    <div>
      <h1>Show Product Detail{id}</h1>
    </div>
  );
};

export default ProductDetailPage;
