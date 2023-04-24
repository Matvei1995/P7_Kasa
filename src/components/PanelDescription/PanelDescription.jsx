import React, { useState } from 'react';
import './PanelDescription.scss';

function PanelDescription(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const [rotation, setRotation] = useState(false);
  const handleClick = () => {
    setRotation(!rotation);
  };
  const showContentIsVisible = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="panel__description">
      <div className="description__header">
        <span>{props.title}</span>
        <div>
          <div
            className={`fas fa- ${rotation ? 'chevron-up' : 'chevron-down'}`}
          />
          <i
            className="fas fa-chevron-up"
            onClick={showContentIsVisible}
            Click={handleClick}
          ></i>
        </div>
      </div>

      {isContentVisible && (
        <p className="description__content">{props.content}</p>
      )}
    </div>
  );
}

export default PanelDescription;
