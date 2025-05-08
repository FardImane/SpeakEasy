import React, { useState } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Erreur :', err);
      setStatus('error');
    }
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Restons connectés" />
        <h1 className="headtext__cormorant">Rejoignez la communauté SpeakEasy</h1>
        <p className="p__opensans">
          Recevez nos dernières actualités, innovations et initiatives pour l'inclusion.
        </p>
      </div>

      <div className="app__newsletter-input flex__center">
        <input
          type="email"
          placeholder="Entrez votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={status === 'error' ? 'input--error' : ''}
        />
        <button
          type="button"
          className="custom__button"
          onClick={handleSubmit}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Envoi...' : 'S’inscrire'}
        </button>
      </div>

      <div aria-live="polite" className="app__newsletter-message">
        {status === 'success' && (
          <p className="success-message">
            🎉 Bienvenue chez SpeakEasy ! Un email vous a été envoyé.
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
