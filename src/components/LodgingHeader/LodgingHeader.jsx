import React from 'react';
import './LodgingHeader.scss';
import stars from '../assets/stars.svg';

function LodgingHeader(props) {
  const SelectionLodg = props.selectionLodg;

  const name = SelectionLodg.host.name;

  const [firstName, lastName] = name.split(' ');

  return (
    <div className="lodging__header">
      <div className="lodging__title">
        <h1 className="lodging-page__title">{SelectionLodg.title}</h1>
        <h2 className="lodging-page-subtitle">{SelectionLodg.location}</h2>
        <div className="lodging__tags">
          {SelectionLodg.tags.map((tag) => (
            <span key={tag} className="lodging__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="lodging__owner">
        <div className="lodging__owner__details">
          <h3 className="lodging__owner__name">
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="lodging__owner__badge">
            <img src={SelectionLodg.host.picture} alt="Photo de profil "></img>
          </div>
        </div>

        <div className="lodging__owner__stars">
          {[1, 2, 3, 4, 5].map((num, i) => (
            <span key={i} className={SelectionLodg >= num ? 'on' : ''}>
              <img
                className="position__stars"
                src={stars}
                alt="Des étoiles"
              ></img>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default LodgingHeader;
