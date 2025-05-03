import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Restons connectés" />
      <h1 className="headtext__cormorant">Rejoignez la communauté SpeakEasy</h1>
      <p className="p__opensans">Recevez nos dernières actualités, innovations et initiatives pour l'inclusion.</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Entrez votre adresse email" />
      <button type="button" className="custom__button">S’inscrire</button>
    </div>
  </div>
);

export default Newsletter;
