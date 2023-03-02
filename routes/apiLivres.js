const express = require('express');
const router = express.Router();

const Livres = require('../modeles/Livres.js');

router.get('/', (requete, reponse) => {
    Livres.getLivres((err, livres)=>{
        if (err) throw err;
        reponse.json(livres);
    }, 25);
});

router.post('/', (requete, reponse) => {
    let livre = requete.body;
    // console.log(livre);
    Livres.ajoutLivre( livre, (err, retourLivre)=>{
        if (err) throw err;
        reponse.json(retourLivre);
    });
});

router.put('/:isbnLivre', (requete, reponse)=>{
    let nouveauLivre = requete.body;
    Livres.modifierLivre(requete.params.isbnLivre, nouveauLivre, (err, resultat) => {
        if (err) throw err;
        reponse.json(resultat);
    });
});
router.delete('/:isbnLivre', (requete, reponse)=>{
    Livres.supprimerLivre(requete.params.isbnLivre, (err, livre) => {
        if (err) throw err;
        reponse.json(livre);
    });
});
router.get('/titre/:titreLivre', (requete, reponse) => {
    Livres.getLivreParChamp("titre", requete.params.titreLivre, (err, livre)=>{
        if (err) throw err;
        reponse.json(livre);
    });
});
router.get('/auteur/:auteurLivre', (requete, reponse) => {
    Livres.getLivreParChamp("auteur", requete.params.auteurLivre, (err, livre)=>{
        if (err) throw err;
        reponse.json(livre);
    });
});
router.get('/isbn/:isbnLivre', (requete, reponse) => {
    Livres.getLivreParChamp("isbn", requete.params.isbnLivre, (err, livre)=>{
        if (err) throw err;
        reponse.json(livre);
    });
});
router.get('/description/:descLivre', (requete, reponse) => {
    Livres.getLivreParChamp("description", requete.params.descLivre, (err, livre)=>{
        if (err) throw err;
        reponse.json(livre);
    });
});


module.exports = router;