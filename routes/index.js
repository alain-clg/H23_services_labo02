const express = require('express');
const router = express.Router();

router.get('/', (requete, reponse) => {
    reponse.send('utilisez /api/livres pour faire appel au service Web des livres...');
});
router.get('/index.html', (requete, reponse) => {
    lirePageWeb('index.html', reponse);
});
router.get('/autre', (requete, reponse) => {
    reponse.send('voici la page pour la route /autre...');
});
function lirePageWeb(nomPageWeb, reponse) {
    const fs = require('fs');
    const path = require('path');
    const fichier = path.join(__dirname, "..", nomPageWeb);
    console.log(fichier);
    fs.readFile(fichier, (err, contenu) => {
        if (err) {
            reponse.status(500).send('Erreur serveur Web: '+err.code);
        } else {
            reponse.status(200).set( {'Content-type': 'text/html'} ).send(contenu);
        }
    });
}
module.exports = router;