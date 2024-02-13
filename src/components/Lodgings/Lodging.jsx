import React, { useEffect, useState } from 'react';

import LodgingCards from '../LodgingCards/LodgingCards';
import './Lodging.scss';
import logements from "../listLodgings.json";
function Lodging() {
  const [lodgings, setLodgings] = useState([]);

  useEffect(fetchLodgings, []);
 function fetchLodgings() {
    fetch('/listLodgings.json')
      .then((response) =>{ 
          console.log(response);
        response.json();
      })
      .then((response) => setLodgings(response))
      .catch((error)=>{
        console.log(error);
      });
    
  }
  
 
  return (
    
    <div className="lodging__grid">
    
        {lodgings.map((lodging) => (
          <LodgingCards
            key={lodging.id}
            id={lodging.id}
            title={lodging.title}
            imageUrl={lodging.cover}
          />
        ))}
      
    </div>
  );
}

export default Lodging;
