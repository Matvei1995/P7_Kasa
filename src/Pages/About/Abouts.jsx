import React from 'react';

import './Abouts.scss';
import AboutBanner from '../../components/ImagesBanner/ImagesBanner';
import AboutDescription from '../../components/PanelDescription/PanelDescription';

function About() {
  return (
    <>
      <AboutBanner />
      <div className="About__container">
        <AboutDescription
          title="Fiabilité"
          content="loremsqjdbjksfhjqkshfjdshqfjqhkjfhbdjkf"
        />
        <AboutDescription
          title="Respect"
          content="loremsqjdbjksfhjqkshfjdshqfjqhkjfhbdjkf"
        />
        <AboutDescription
          title="Service"
          content="loremsqjdbjksfhjqkshfjdshqfjqhkjfhbdjkf"
        />
        <AboutDescription
          title="Responsabilité"
          content="loremsqjdbjksfhjqkshfjdshqfjqhkjfhbdjkf"
        />
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
