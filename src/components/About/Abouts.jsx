import React from 'react';

import './Abouts.scss';

//import aboutDataArray from '../../datas/About.json';
//import imgAbout from '../assets/background_about.png';
import AboutBanner from '../ImagesBanner';
import AboutDescription from '../PanelDescription';

function About() {
  return (
    <>
      <AboutBanner />
      <div className="About__container">
        <AboutDescription />
        <AboutDescription />
        <AboutDescription />
        <AboutDescription />
      </div>
    </>
  );
}

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
export default About;
