import React from 'react';

import LodgingBanner from '../ImagesBanner';
import LodgingDescription from '../PanelDescription';
import JsonConverterPages from './JsonConverterPages';
import './LodgingPages.scss';

import LodgingHeader from '../LodgingHeader.jsx';
function LodgingPages() {
  return (
    <>
      <LodgingBanner />
      <article className="lodging-page">
        <LodgingHeader />
        <div className="lodging__description__area">
          <LodgingDescription title={JsonConverterPages.description} />
          <LodgingDescription title={JsonConverterPages.equipments} />
        </div>
      </article>
    </>
  );
}
export default LodgingPages;
