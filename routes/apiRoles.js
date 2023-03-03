const express = require('express');
const router = express.Router();

const Roles = require('../modeles/Roles.js');

router.get('/', (requete, reponse) => {
    Roles.getRoles((err, roles)=>{
        if (err) throw err;
        reponse.json(roles);
    }, 25);
});
router.post('/', (requete, reponse) => {
    let role = requete.body;
    // console.log(livre);
    Roles.ajoutRole( role, (err, resultat)=>{
        if (err) throw err;
        reponse.json(resultat);
    });
});
// router.delete('/:loginUser', (requete, reponse) => {
//     Users.supprimerUser(requete.params.loginUser, (err, resultat) => {
//         if (err) throw err;
//         reponse.json(resultat);
//     });
// });
// router.put('/:loginUser', (requete, reponse)=>{
//     let nouveauUser = requete.body;
//     Users.modifierUser(requete.params.loginUser, nouveauUser, (err, resultat) => {
//         if (err) throw err;
//         reponse.json(resultat);
//     });
// });
// router.get('/nom/:nomUser', (requete, reponse) => {
//     Users.getUserParChamp("nom", requete.params.nomUser, (err, users)=>{
//         if (err) throw err;
//         reponse.json(users);
//     }, 10);
// });
// router.get('/login/:loginUser', (requete, reponse) => {
//     Users.getUserParChamp("login", requete.params.loginUser, (err, users)=>{
//         if (err) throw err;
//         reponse.json(users);
//     }, 10);
// });
module.exports = router;