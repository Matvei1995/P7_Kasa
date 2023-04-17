import React from 'react';
import './PanelDescription.scss';

function PanelDescription() {
  return (
    <div className="panel__description">
      <p className="description__header">
        <span>Description</span>

        <i className="fas fa-chevron-up"></i>
      </p>

      <p className="description__content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
        praesentium sint incidunt reprehenderit laboriosam inventore quisquam ut
        nam reiciendis, dignissimos assumenda consequatur eos, dicta
        repellendus, aspernatur nemo laudantium temporibus expedita.
      </p>
    </div>
  );
}

export default PanelDescription;
