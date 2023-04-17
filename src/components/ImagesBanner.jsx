import React from 'react';
import Banner from './assets/background_about.png';
import './Banner/Banner.scss';

function ImagesBanner() {
  return (
    <div className="banner">
      <img className="banner_img" src={Banner} alt="Banner" />

      <div className="banner_opacity"></div>
    </div>
  );
}
export default ImagesBanner;
