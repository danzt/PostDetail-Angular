import { useState, useEffect } from 'react';

import WeatherList from './../components/WeatherList.js'

const Weather = () => {
  const [weathers, setWeathers] = useState([]);

  useEffect(() => {
    let apiKey = '56d4fc7d7e36d83c316f084aa6708909';
    let bbox = '12,32,15,37,10';
    let url = `http://api.openweathermap.org/data/2.5/box/city?bbox=${bbox}&appid=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setWeathers(data.list));
    }, []);

  return (
    <>
      <div className="container mb-5">
        <h1 className="mb-5 mt-5 text-center"> My City </h1>
        <WeatherList weathers={weathers} title="Weather City" />
      </div>
    </>
  );
};

export default Weather;
