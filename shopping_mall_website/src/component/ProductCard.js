import React from 'react';

const ProductCard = ({ item }) => {
  console.log('item', item);
  return (
    <>
      {item && (
        <div>
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
