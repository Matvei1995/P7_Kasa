import React from 'react';
import './LodgingHeader.scss';

function LodgingHeader() {
  return (
    <div className="lodging__header">
      <div className="lodging__title">
        <h1 className="lodging-page__title">Crazy loft Canal Saint Martin</h1>
        <h2 className="lodging-page-subtitle">Paris, Ile de France</h2>
        <div className="lodging__tags">
          <span className="lodging__tag">Cozy</span>
          <span className="lodging__tag">Canal</span>
          <span className="lodging__tag">Paris 10</span>
        </div>
      </div>
      <div className="lodging__owner">
        <div className="lodging__owner__details">
          <h3 className="lodging__owner__name">
            <span>Alexandre</span>
            <span>Dumas</span>
          </h3>
          <div className="lodging__owner__badge"></div>
        </div>

        <div className="lodging__owner__stars">
          <span className="on"> ★ </span>
          <span className="on"> ★ </span>
          <span className="on"> ★ </span>
          <span className="off"> ★ </span>
          <span className="off"> ★ </span>
        </div>
      </div>
    </div>
  );
}
export default LodgingHeader;
