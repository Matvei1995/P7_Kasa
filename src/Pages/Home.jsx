import React from 'react';
import Banner from '../components/Banner/Banner.jsx';
import Lodging from '../components/Lodgings/Lodging.jsx';
import '../configstyles/Home.scss';

import '../configstyles/Allmixins.scss';

function Home() {
  return (
    <>
      <div className="Home-main">
        <Banner />
        <Lodging />
      </div>
    </>
  );
}

export default Home;
