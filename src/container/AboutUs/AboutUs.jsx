import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-content flex__center">

      {/* Colonne de gauche alignée à droite */}
      <div className="app__aboutus-content_about align-right">
        <h1 className="headtext__cormorant">À qui s’adresse SpeakEasy</h1>
        <p className="p__opensans">
          SpeakEasy accompagne les personnes sourdes ou malentendantes, leurs proches, les associations, les écoles, les entreprises et les services publics souhaitant favoriser l’inclusion.
        </p>
      </div>

      {/* Avatar vidéo au centre */}
      <div className="avatar__container">
        <video
          src={images.avatar}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Colonne de droite */}
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Notre impact et nos actions</h1>
        <p className="p__opensans">
          Nous promouvons l’égalité des chances et la sensibilisation à la langue des signes dans les domaines de l’éducation, de l’emploi, du médico-social, de la culture et du service public.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
