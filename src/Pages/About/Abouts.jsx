import React from 'react';

import './AboutsBanner.scss';
import AboutBanner from './AboutBanner.jsx';
import AboutDescription from '../../components/PanelDescription/PanelDescription';

function About() {
  return (
    <>
      <AboutBanner />
      <div className="About__container">
        <AboutDescription
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <AboutDescription
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <AboutDescription
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <AboutDescription
          title="Responsabilité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </>
  );
}
export default About;

/*
const [contentVisible, setIsContentVisible] = useState(false);
  const dropDownContent = () => {
    setIsContentVisible(!contentVisible);
  };


{aboutDataArray.map((props) => (
  <div key={props}></div>
))}
<article className="">
        <div className="cards">
          {aboutDataArray.map((Abouts) => (
            <div key={Abouts}>
              <div className="cards__title-container">
                {Abouts.aboutTitle}
                <span
                  className="chevron bottom"
                  onClick={dropDownContent}
                ></span>
              </div>

              {contentVisible && (
                <h5 className="cards__value">{Abouts.aboutText}</h5>
              )}
            </div>
          ))}
        </div>
      </article> 
      
      
      
      
      
      
       <Banner imageUrl={imgAbout} alt="Image A propos" />

      <LodgingDescription
        title={aboutDataArray.aboutTitle1}
        content={aboutDataArray.aboutText1}
      />
      <LodgingDescription
        title={aboutDataArray.aboutTitle2}
        content={aboutDataArray.aboutText2}
      />
      <LodgingDescription
        title={aboutDataArray.aboutTitle3}
        content={aboutDataArray.aboutText3}
      />
      <LodgingDescription
        title={aboutDataArray.aboutTitle4}
        content={aboutDataArray.aboutText4}
      />
      
      
      */
