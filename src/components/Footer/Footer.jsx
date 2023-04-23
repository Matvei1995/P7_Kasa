import React from 'react';
import './Footer.scss';
import imgFooter from './lgFooter.svg';

function Footer() {
  return (
    <footer className="container_footer">
      <img
        className="container_footer__img"
        src={imgFooter}
        alt="logo monochrome"
      />
      <p className="container_footer__p">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;
