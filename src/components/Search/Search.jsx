import React from 'react';
import s from './Search.module.scss';

export const Search = (props) => {
  const {
    onChangeInput = Function.prototype,
    handleSearch = Function.prototype,
    city,
  } = props;

  return (
    <div className={s.search}>
      <input
        className={s.search_input}
        type='text'
        placeholder='city'
        value={city}
        onChange={onChangeInput}
        onKeyPress={handleSearch}
      />
    </div>
  );
};
