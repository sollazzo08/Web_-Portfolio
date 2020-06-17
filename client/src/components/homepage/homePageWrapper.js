import React from 'react';
import NavBar from './navbar/Navbar';
import MediaPage from './mediaPage/MediaSection';
import LandingPageContent from './mediaPage/LandingPageContent';

function HomePageWrapper(){

    return(
      <div>
        <NavBar />
        <LandingPageContent />

      </div>
    )
}

export default HomePageWrapper;