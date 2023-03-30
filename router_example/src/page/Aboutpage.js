import React from 'react';
import { useNavigate } from 'react-router-dom';

const Aboutpage = () => {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate('/'); // 인자로 가고싶은 path를 담아서 navigate 함수를 호출
  };
  return (
    <div>
      <h1>Aboutpage입니다.</h1>
      <button onClick={goToHomepage}>Go to Homepage</button>
    </div>
  );
};

export default Aboutpage;
