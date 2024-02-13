import React, { useEffect, useState } from 'react';

import LodgingBanner from '../../components/ImagesBanner/ImagesBanner';
import LodgingDescription from '../../components/PanelDescription/PanelDescription';

import './LodgingPages.scss';

import LodgingHeader from '../../components/LodgingHeader/LodgingHeader';
import { useLocation } from 'react-router-dom';

function LodgingPages() {
  const location = useLocation();

  const [selectionLodg, setSelectionLodg] = useState(null);

  useEffect(() => {
   
     function init() {
       const id = location.pathname.replace('/Lodging/', '');

       fetch('/listLodgings.json')
         .then((response) => response.json())
         .then((lodgs) => {
           const selectionLodg = lodgs.find((lodg) => lodg.id === id);
           setSelectionLodg(selectionLodg);
         })
         .catch((error)=>{
          console.log(error);
        });
     }
    
     init();
  }, []);

  if (selectionLodg === null) return <div>Chargement...</div>;

  return (
    <>
      <div className="LodgMain">
        <LodgingBanner picturesArray={selectionLodg.pictures} />
        <article className="lodging-page">
          <LodgingHeader selectionLodg={selectionLodg} />
          <div className="lodging__description__area">
            <LodgingDescription
              title="Description"
              content={selectionLodg.description}
            />
            <LodgingDescription
              title="Équipements"
              content={selectionLodg.equipments.map((equip, el) => (
                <>
                  <ul>
                    <li key={equip}>{el}</li>
                  </ul>
                </>
              ))}
            />
          </div>
        </article>
      </div>
    </>
  );
}

export default LodgingPages;
