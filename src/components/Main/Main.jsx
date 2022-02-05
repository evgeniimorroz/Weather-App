import React, { useState } from 'react';
import { Result } from '../Result/Result';
import { Search } from '../Search/Search';
import { API_KEY, API_URL } from '../../config';
import s from './Main.module.scss';

export const Main = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const onChangeInput = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      fetch(`${API_URL}weather?q=${city}&units=metric&lang=ru&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setCity('');
          console.log(data);
        });
    }
  };

  return (
    <>
      <div className={s.main}>
        <Search onChangeInput={onChangeInput} handleSearch={handleSearch} />
        {typeof weather.main != 'undefined' ? <Result weather={weather} /> : ''}
      </div>
    </>
  );
};
