import { useEffect, useState } from 'react';
import './App.css';

// 1. 앱이 실행되자 마자 현재위치 기반의 날씨가 보인다
// 2. 날씨 상태 정보에는 도시, 섭씨, 화씨
// 3. 5개의 버튼(1개는 현재 위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭하면 도시별 날씨가 나옴
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나옴
// 6. 로딩 스피너

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log('현재위치', lat, lon);
    });
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return <div>hi</div>;
}

export default App;
