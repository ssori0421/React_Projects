import React from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductPage = () => {
  let [query, setQuery] = useSearchParams();
  console.log('q', query.get('q')); // q 쿼리에 있는 값을 가져와줘
  return (
    <div>
      <h1>Show All Products</h1>
    </div>
  );
};

export default ProductPage;
