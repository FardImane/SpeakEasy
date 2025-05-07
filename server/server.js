const mailjet = require('node-mailjet');
const fs = require('fs');
const path = require('path');

const mailjetClient = mailjet.apiConnect(
  process.env.MJ_API_KEY,
  process.env.MJ_API_SECRET
);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Email invalide' });
  }

  // Lit le fichier HTML du dossier `public`
  const filePath = path.join(process.cwd(), 'public', 'template.html');
  const htmlTemplate = fs.readFileSync(filePath, 'utf8');

  try {
    const request = await mailjetClient
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: 'imanefard.2002@gmail.com',
              Name: 'SpeakEasy',
            },
            To: [
              {
                Email: email,
                Name: 'Utilisateur',
              },
            ],
            Subject: 'Bienvenue chez SpeakEasy !',
            HTMLPart: htmlTemplate,
          },
        ],
      });

    console.log('✉️ Email envoyé à :', request.body.Messages[0].To[0].Email);
    return res.status(200).json({ message: 'Inscription réussie' });
  } catch (err) {
    console.error('❌ Erreur Mailjet :', err.statusCode, err.message);
    return res.status(500).json({ message: 'Erreur lors de l’envoi du mail' });
  }
};
