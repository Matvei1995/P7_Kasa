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

        <i
          id="chevron"
          className="fas fa-chevron-up"
          onClick={showContentIsVisible}
        ></i>
      </div>

      {isContentVisible && (
        <p className="description__content">{props.content}</p>
      )}
    </div>
  );
}

export default PanelDescription;
