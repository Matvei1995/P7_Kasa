import React, { useState } from 'react';
import './PanelDescription.scss';

function PanelDescription(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContentIsVisible = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="panel__description">
      <div className="description__header">
        <span>{props.title}</span>
        <div>
          <div
            onClick={showContentIsVisible}
            className={`fas fa-chevron-up rotate ${
              isContentVisible ? 'down' : ''
            }`}
          ></div>
        </div>
      </div>

      {isContentVisible && (
        <p className="description__content">{props.content}</p>
      )}
    </div>
  );
}

export default PanelDescription;
