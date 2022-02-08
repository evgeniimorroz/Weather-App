import React from 'react';
import s from './Result.module.scss';
import classNames from 'classnames';

export const Result = ({ weather, dateTime }) => {
  const icons = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
  const date = new Date().toJSON().slice(0, 10).replace(/-/g, ' ');

  let sunsetTime = new Date(weather.sys.sunset * 1000);
  sunsetTime =
    sunsetTime.getUTCHours() +
    weather.timezone / 3600 +
    ':' +
    sunsetTime.getMinutes() +
    ':' +
    sunsetTime.getSeconds();

  let sunriseTime = new Date(weather.sys.sunrise * 1000);
  sunriseTime =
    sunriseTime.getUTCHours() +
    weather.timezone / 3600 +
    ':' +
    sunriseTime.getMinutes() +
    ':' +
    sunriseTime.getSeconds();

  return (
    <div className={s.result}>
      <div className={s.result__temp}>
        <span className={s.city}>
          {weather.name},{' '}
          <span className={s.country}>{weather.sys.country}</span>
        </span>
        <div className={s.info}>
          <span className={s.info_digit}>{Math.floor(weather.main.temp)}</span>{' '}
          <img src={icons} alt={weather.weather[0].description} />
        </div>
        <span className={s.description}>{weather.weather[0].description}</span>
      </div>
      <div className={s.result__info}>
        <div className={classNames(s.wind, s.blocks)}>
          <span>Скорость ветра</span>
          <span className={s.data}>
            <i className='fas fa-wind'></i>
            {Math.floor(weather.wind.speed)} м/c
          </span>
        </div>
        <div className={classNames(s.hudity, s.blocks)}>
          <span>Влажность</span>
          <span className={s.data}>
            <i className='fas fa-tint'></i>
            {weather.main.humidity} %
          </span>
        </div>
        <div className={classNames(s.sunset, s.blocks)}>
          <span>Закат</span>{' '}
          <span className={s.data}>
            <i className='far fa-sun'></i>
            {sunsetTime}
          </span>
        </div>
        <div className={classNames(s.sunrise, s.blocks)}>
          <span>Восход</span>{' '}
          <span className={s.data}>
            <i className='fas fa-sun'></i>
            {sunriseTime}
          </span>
        </div>
        <div className={s.day_time}>
          <div className={s.day}>
            <i className='far fa-calendar-alt'></i>
            <span>{date}</span>
          </div>
          <div className={s.time}>
            <i className='far fa-clock'></i>
            <span>{dateTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
