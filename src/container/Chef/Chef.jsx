import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
    <SubHeading title="Notre engagement" />
  <h1 className="headtext__cormorant">Une vision inclusive</h1>

  <div className="app__chef-content">
    <div className="app__chef-content_quote">
      <img src={images.quote} alt="image_citation" />
      <p className="p__opensans">
        Et si la technologie pouvait rapprocher les cœurs autant que les voix ?
      </p>
    </div>
    <p className="p__opensans">
      Nous croyons en un monde où chaque personne, entendante ou malentendante, a sa place, sa voix, son espace. Un monde où l’inclusion n’est pas une option, mais une évidence.
    </p>
    <p className="p__opensans">
      Grâce à l’intelligence artificielle, nous ouvrons des ponts là où il y avait des silences. Nous redonnons aux gestes leur puissance, et aux regards leur dialogue.
    </p>
    <p className="p__opensans">
      Ensemble, construisons une société plus juste, plus connectée, plus humaine.
    </p>
    <p className="p__opensans" style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--color-golden)' }}>
      Rejoignez-nous dans ce mouvement. <strong>#AIpourleBien</strong>
    </p>
  </div>

      <div className="app__chef-sign">
        <p>SpeakEasy</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
