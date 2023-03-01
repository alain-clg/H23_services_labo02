const express = require('express');
const router = express.Router();

router.get('/', (requete, reponse) => {
    reponse.send('utilisez /api/livres pour faire appel au service Web des livres...');
});
router.get('/autre', (requete, reponse) => {
    reponse.send('voici la page pour la route /autre...');
});
module.exports = router;