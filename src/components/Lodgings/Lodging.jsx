import React from 'react';
import '../../configstyles/Lodging.scss';
import data from '../../datas/listLodging.json';
import { Link } from 'react-router-dom';

function Lodging() {
  return (
    <article className="lodgin_container">
      <div className="lodgin_container_card__layer">
        {data.map((Lodging) => (
          <Link to="/Lodging" state={{ lodgingId: Lodging.id }}>
            <div key={Lodging}></div>
            <div className="card">
              <img
                className="card__pictures"
                src={Lodging.cover}
                alt={Lodging.cover}
              />
              <div className="card__title-container">
                <h5 className="card__title-container__value">
                  {Lodging.title}
                </h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}

export default Lodging;
/*
Exemple d'une bonne structure
<article className="lodgin-container">
             <div className="lodgin-container__card-layer">
            {data.map(Lodging => 
            (
                <div className="card" key={Lodging.id}>
                    <img className="card__pictures" src={Lodging.cover} alt={Lodging.title} />
                    <div className="card__title-container">
                        <h5 className="card__title-container__value">{Lodging.title}</h5> 
                    </div>
                
                </div>
            ))}
            </div>
            </article>*/

/*<ul>
                    {Lodging.pictures.map((pictures,index)=> (
                        <li key={index}>
                            <img className="lodgin_container_card__pictures" src={pictures} alt={`Images ${index +1} de ${Lodging.title}`} />
                        </li>
                    ))}
                </ul>

                Ce code ce dessus est pour ajouter 
                tout les images d'un logement a coller dans un  autre fichier plus tard*/
