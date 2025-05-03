import React from 'react';
import { SubHeading } from '../../components';
import { data } from '../../constants';
import './SpecialMenu.css';

const icons = [
  `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3z"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/></svg>`
];

const SpecialMenu = () => {
  return (
    <section id="menu" className="app__specialMenu section__padding">
      <div className="app__specialMenu-title">
        <SubHeading title="Des Offres Pensées Pour Vous" />
        <h1 className="headtext__cormorant">Choisissez votre formule</h1>
      </div>

      <div className="app__specialMenu-menu_gallery_cards">
        {data.cocktails.map((offer, index) => {
          const className =
            'card card--' +
            offer.title
              .toLowerCase()
              .normalize('NFD')
              .replace(/[̀-ͯ]/g, '')
              .replace(/[^a-z]/g, '');

          return (
            <div key={index} className={className}>
              <img src={offer.image} alt={offer.title} className="card__image" />
              <div className="card__content">
                <h2 className="card__title">{offer.title}</h2>
                <h4 className="card__subtitle">{offer.price}</h4>
                <div className="card__features">
                  {offer.tags.split('|').map((tag, i) => (
                    <div className="card__feature" key={i}>
                      <span
                        className="card__icon"
                        dangerouslySetInnerHTML={{ __html: icons[i % icons.length] }}
                      />
                      <p>{tag.trim()}</p>
                    </div>
                  ))}
                </div>
                <div className="card__hovertext">
                  {offer.title === 'FREEMIUM' && 'Essayez sans risque, 100% gratuit'}
                  {offer.title === 'PREMIUM' && 'Passez à la vitesse supérieure'}
                  {offer.title === 'LICENSE & FINANCEMENT' &&
                    'Pensé pour les pros et les institutions'}
                </div>
                <button className="custom__button">
                  {offer.title === 'FREEMIUM' && 'Commencer gratuitement'}
                  {offer.title === 'PREMIUM' && 'Passer à Premium'}
                  {offer.title === 'LICENSE & FINANCEMENT' && 'Nous contacter'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SpecialMenu;
