const express = require('express');
const router = express.Router();

const Users = require('../modeles/Users.js');

router.get('/', (requete, reponse) => {
    Users.getUsers((err, users)=>{
        if (err) throw err;
        reponse.json(users);
    }, 25);
});
router.post('/', (requete, reponse) => {
    let user = requete.body;
    // console.log(livre);
    Users.ajoutLUser( user, (err, retourUser)=>{
        if (err) throw err;
        reponse.json(retourUser);
    });
});
router.delete('/:loginUser', (requete, reponse) => {
    Users.supprimerUser(requete.params.loginUser, (err, resultat) => {
        if (err) throw err;
        reponse.json(resultat);
    });
});
router.put('/:loginUser', (requete, reponse)=>{
    let nouveauUser = requete.body;
    Users.modifierUser(requete.params.loginUser, nouveauUser, (err, resultat) => {
        if (err) throw err;
        reponse.json(resultat);
    });
});
router.get('/nom/:nomUser', (requete, reponse) => {
    Users.getUserParChamp("nom", requete.params.nomUser, (err, users)=>{
        if (err) throw err;
        reponse.json(users);
    }, 10);
});
router.get('/login/:loginUser', (requete, reponse) => {
    Users.getUserParChamp("login", requete.params.loginUser, (err, users)=>{
        if (err) throw err;
        reponse.json(users);
    }, 10);
});
module.exports = router;