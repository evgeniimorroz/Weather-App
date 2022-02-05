import React from 'react';
import s from './Header.module.scss';
import classNames from 'classnames';

export const Header = () => {
  return (
    <div className={classNames('header')}>
      <div className='container'>
        <a href='#!' className={s.logo}>
          Weather App
        </a>
      </div>
    </div>
  );
};
