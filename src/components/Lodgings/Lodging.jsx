import React, { useEffect, useState } from 'react';

import LodgingCards from '../LodgingCards/LodgingCards';
import './Lodging.scss';

function Lodging() {
  const [lodgings, setLodgings] = useState([]);
  useEffect(fetchLodgings, []);

  function fetchLodgings() {
    fetch('/listLodgings.json')
      .then((response) => response.json())
      .then((response) => setLodgings(response))
      .catch(console.error);
  }

  return (
    <div className="lodging__grid">
      {lodgings.map((lodging, index) => (
        <>
          <LodgingCards
            key={index}
            id={lodging.id}
            title={lodging.title}
            imageUrl={lodging.cover}
          />
        </>
      ))}
    </div>
  );
}

export default Lodging;
