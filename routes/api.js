const express = require('express');
const router = express.Router();

const Livres = require('../modeles/Livres.js');
const Users = require('../modeles/Users.js');

router.get('/livres', (requete, reponse) => {
    Livres.getLivres((err, livres)=>{
        if (err) throw err;
        reponse.json(livres);
    }, 25);
});

router.post('/livres', (requete, reponse) => {
    let livre = requete.body;
    // console.log(livre);
    Livres.ajoutLivre( livre, (err, retourLivre)=>{
        if (err) throw err;
        reponse.json(retourLivre);
    });
});

router.put('/livres/:isbnLivre', (requete, reponse)=>{
    let nouveauLivre = requete.body;
    Livres.modifierLivre(requete.params.isbnLivre, nouveauLivre, (err, resultat) => {
        if (err) throw err;
        reponse.json(resultat);
    });
});
router.delete('/livres/:isbnLivre', (requete, reponse)=>{
    Livres.supprimerLivre(requete.params.isbnLivre, (err, livre) => {
        if (err) throw err;
        reponse.json(livre);
    });
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
router.get('/livres/description/:descLivre', (requete, reponse) => {
    Livres.getLivreParChamp("description", requete.params.descLivre, (err, livre)=>{
        if (err) throw err;
        reponse.json(livre);
    });
});
router.get('/users', (requete, reponse) => {
    Users.getUsers((err, users)=>{
        if (err) throw err;
        reponse.json(users);
    }, 25);
});
router.post('/users', (requete, reponse) => {
    let user = requete.body;
    // console.log(livre);
    Users.ajoutLUser( user, (err, retourUser)=>{
        if (err) throw err;
        reponse.json(retourUser);
    });
});
router.delete('/users/:loginUser', (requete, reponse) => {
    Users.supprimerUser(requete.params.loginUser, (err, resultat) => {
        if (err) throw err;
        reponse.json(resultat);
    });
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