import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <>
      {item && (
        <div onClick={goToDetail}>
          <img src={item.img} />
          <div>{item.title}</div>
          <div>{item.price}</div>
          <div>{!!item.new && 'new'}</div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
