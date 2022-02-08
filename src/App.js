import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      <div className='page'>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};