const express = require('express');
const router = express.Router();

const Livres = require('../modeles/Livres.js');
const Users = require('../modeles/Users.js');

router.get('/livres', (requete, reponse) => {
    Livres.getLivres((err, livres)=>{
        if (err) throw err;
        reponse.json(livres);
    }, 5);
});

router.get('/livres/titre/:titreLivre', (requete, reponse) => {
    Livres.getLivreParChamp("titre", requete.params.titreLivre, (err, livre)=>{
        if (err) throw err;
        reponse.json(livre);
    });
});
router.get('/livres/auteur/:auteurLivre', (requete, reponse) => {
    Livres.getLivreParChamp("auteur", requete.params.auteurLivre, (err, livre)=>{
        if (err) throw err;
        reponse.json(livre);
    });
});
router.get('/livres/isbn/:isbnLivre', (requete, reponse) => {
    Livres.getLivreParChamp("isbn", requete.params.isbnLivre, (err, livre)=>{
        if (err) throw err;
        reponse.json(livre);
    });
});
router.get('/users', (requete, reponse) => {
    Users.getUsers((err, users)=>{
        if (err) throw err;
        reponse.json(users);
    }, 5);
});
router.get('/users/nom/:nomUser', (requete, reponse) => {
    Users.getUserParChamp("nom", requete.params.nomUser, (err, users)=>{
        if (err) throw err;
        reponse.json(users);
    }, 10);
});
router.get('/users/login/:loginUser', (requete, reponse) => {
    Users.getUserParChamp("login", requete.params.loginUser, (err, users)=>{
        if (err) throw err;
        reponse.json(users);
    }, 10);
});
module.exports = router;