import React from 'react';

export const Footer = () => {
  return (
    <footer className='page-footer footer'>
      <div className='footer-copyright container'>
        <div className='container center'>© {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
};
