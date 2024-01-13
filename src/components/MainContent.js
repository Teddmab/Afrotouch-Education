import '../styles/MainContent.css';
import React, { useState } from 'react'; // eslint-disable-next-line
import CandidateJourney from './CandidateJourney';
import SocialLinks from './SocialLinks';
import inspiringImage from '../assets/inspiring 1.png'; // Adjust the path based on your folder structure

function MainContent() {
    return (
    <main className="main-content">
      <SocialLinks />
      <div className="inspiring-image-container">
        <img src={inspiringImage} alt="Inspiring" className="inspiring-image" />
      </div>
      
      <CandidateJourney />

      <a href="/faq" className="back-to-main">Frequently Asked Questions</a>
      
    </main>
    );
}

export default MainContent;
