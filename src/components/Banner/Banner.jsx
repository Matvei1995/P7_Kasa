import React from 'react';
import BannerImg from '../assets/BannerImg.jpg';

import './Banner.scss';
function Banner() {
  return (
    <div className="banner">
      <div className="banner_img">
        <img src={BannerImg} alt="Chez vous,partout et ailleurs" />
      </div>
      <div className="banner_opacity"></div>
      <div className="banner_title">
        <h1 className="title ">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;
