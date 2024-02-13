import React, { useEffect, useState } from 'react';

import LodgingCards from '../LodgingCards/LodgingCards';
import './Lodging.scss';

function Lodging() {
  const [homes, setLodgings] = useState([]);
  console.log(homes);
   useEffect(fetchLodgings, []);

 function fetchLodgings() {
    fetch("/listLodgings.json")
      .then((response) =>{ 
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setLodgings(response)
      
      })
      .catch((error)=>{
        console.log(error);
      });
    
  }
  
  const maisons = homes.map((lodging) => {
    return (
      <LodgingCards
      key={lodging.id}
      id={lodging.id}
      title={lodging.title}
      imageUrl={lodging.cover}
      />
      
          )
        }
  );
  return (
    <div className="lodging__grid">
      {maisons}
    </div>
  );
}

export default Lodging;
