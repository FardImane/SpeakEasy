const mailjet = require('node-mailjet');
const fs = require('fs');
const path = require('path');

console.log('🚀 [API] Démarrage de la fonction /api/newsletter');

const mailjetClient = mailjet.apiConnect(
  process.env.MJ_API_KEY,
  process.env.MJ_API_SECRET
);

module.exports = async (req, res) => {
  console.log('📩 Requête reçue avec méthode :', req.method);

  if (req.method !== 'POST') {
    console.warn('⛔ Méthode non autorisée :', req.method);
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { email } = req.body;
  console.log('📨 Email reçu :', email);

  if (!email || !email.includes('@')) {
    console.warn('⚠️ Email invalide');
    return res.status(400).json({ message: 'Email invalide' });
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'template.html');
    console.log('📁 Lecture du fichier template à :', filePath);

    const htmlTemplate = fs.readFileSync(filePath, 'utf8');
    console.log('✅ Template HTML chargé (taille:', htmlTemplate.length, 'caractères)');

    const request = await mailjetClient
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: 'imanefard.2002@gmail.com',
              Name: 'SpeakEasy',
            },
            To: [{ Email: email, Name: 'Utilisateur' }],
            Subject: 'Bienvenue chez SpeakEasy !',
            HTMLPart: htmlTemplate,
          },
        ],
      });

    console.log('✅ Email envoyé avec succès à :', email);
    return res.status(200).json({ message: 'Inscription réussie' });

  } catch (err) {
    console.error('❌ Erreur pendant le traitement :');
    console.error('🧨 statusCode:', err.statusCode || 'N/A');
    console.error('🧨 message:', err.message || err.toString());
    console.error('🧨 full error:', err);
    return res.status(500).json({ message: 'Erreur lors de l’envoi du mail' });
  }
};
