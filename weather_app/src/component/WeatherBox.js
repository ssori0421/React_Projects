import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const WeatherBox = ({ weather, loading }) => {
  // console.log(weather);
  return (
    <div className='weatherWrap'>
      {loading ? (
        <ClipLoader color='#000000' loading={loading} size={150} />
      ) : (
        <>
          <div>{weather && weather.name}</div>
          <h2>
            {weather && weather.main.temp}℃ /
            {parseInt(weather && weather.main.temp / 1.8)}℉
          </h2>
          <h3>{weather && weather.weather[0].description}</h3>
        </>
      )}
    </div>
  );
};

export default WeatherBox;
