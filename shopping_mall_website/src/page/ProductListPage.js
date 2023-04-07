import React, { useState, useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductListPage = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  
  const getProducts = async () => {
    const searchQuery = query.get('q') || '';
    console.log('searchQuery', searchQuery);
    const url = `https://my-json-server.typicode.com/ssori0421
    /React_Projects_basic/products?q=${searchQuery}`;
    const response = await fetch(url); // url을 fetch해줘
    const data = await response.json(); // response에서 json 추출
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className='productCardContainer'>
      {productList.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductListPage;
