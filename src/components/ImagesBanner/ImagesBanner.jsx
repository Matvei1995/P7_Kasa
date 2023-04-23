import React, { useState } from 'react';

import './ImagesBanner.scss';

function ImagesBanner(props) {
  const picturesArray = props.picturesArray;

  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    if (i === currentPicture) return 'show';
    return '';
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % picturesArray.length);
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(picturesArray.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  const carouselDefault = picturesArray.map((pic, i) => (
    <img
      className={getClassName(i)}
      key={pic}
      src={pic}
      alt="carrousel images"
    ></img>
  ));

  return (
    <div className="Banner">
      <div className="image__container">
        {carouselDefault}
        <div className="button btn-right" onClick={moveToNext}>
          <i className="fas fa-regular fa-chevron-right"></i>
        </div>
        <div className="slide-counter">
          {currentPicture + 1} / {picturesArray.length}
        </div>
        <div className="button btn-left" onClick={moveToPrevious}>
          <i className="fas fas-regular fas-chevron-left"></i>
        </div>
      </div>
    </div>
  );
}
export default ImagesBanner;
