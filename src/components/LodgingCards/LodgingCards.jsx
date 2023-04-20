import React from 'react';
import './LodgingCards.scss';

import { Link } from 'react-router-dom';

function LodgingCards(props) {
  return (
    <Link
      to="/Lodging"
      state={{
        lodgingId: props.id,
      }}
    >
      <article className="lodgin_container">
        <div className="lodgin_container_card__layer">
          <div id={props.id}></div>
          <div className="card">
            <img
              className="card__pictures"
              src={props.imageUrl}
              alt={'Image de couverture'}
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
