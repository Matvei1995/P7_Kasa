import React from 'react';
import './LodgingCards.scss';

import { Link } from 'react-router-dom';

function LodgingCards(props) {
  const idLodg = props.id;

  return (
     <Link
       to={'/Lodging' + '/' + idLodg}
       state={{
         id: idLodg,
       }}
     >
      <article className="lodgin_container">
        <div className="lodgin_container_card__layer">
          <div className="card">
            <img
              className="card__pictures"
              src={props.imageUrl}
              alt="couverture"
            />

            <div className="card__title-container">
              <h5 className="card__title-container__value">{props.title}</h5>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default LodgingCards;
