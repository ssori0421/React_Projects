import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import ButtonBox from './component/ButtonBox';

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
      getWeatherByCurrentLocation(lat, lon); // lat, lon을 인자로 넘겨주면서 getWeatherByCurrentLocation 함수를 호출
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e919bb3b5b58a2b3ce50ef98fb148e5a`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data', data);
  }; // getWeatherByCurrentLocation 함수는 lat, lon을 매개변수로 넘겨받아 url을 생성하는 작업을 함

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <div className='weatherContainer'>
        <WeatherBox />
        <ButtonBox />
      </div>
    </div>
  );
}

export default App;
