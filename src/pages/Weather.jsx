import React, { useState, useEffect, useReducer } from 'react';

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
      <WeatherList weathers={weathers} title="Weather City" />
    </>
  );
};

export default Weather;
