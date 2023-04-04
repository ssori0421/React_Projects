import React, { useState, useEffect } from 'react';

const ProductListPage = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    const url = 'http://localhost:5000/products';
    const response = await fetch(url); // url을 fetch해줘
    const data = await response.json(); // response에서 json 추출
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return <div></div>;
};

export default ProductListPage;
