import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate('/'); // 인자로 가고싶은 path를 담아서 navigate 함수를 호출
  };
  return (
    <div>
      <h1>Aboutpage입니다.</h1>
      <button onClick={goToHomePage}>Go to HomePage</button>
    </div>
  );
};

export default AboutPage;
