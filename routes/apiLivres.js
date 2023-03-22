// Fichier routes des /api/livres
// Auteur: Alain Pilon
// Date: 22 mars 2023
const express = require('express');
const router = express.Router();

const Livres = require('../modeles/Livres.js');
const mongoose = require('mongoose');

router.get('/', (requete, reponse) => {
    Livres.find({}, null, {limit: 25, sort: {auteur: 1}}).exec()
    .then((livres)=>reponse.json(livres))
    .catch((err)=>console.log(err));
});
router.get('/titre/:titreLivre', (requete, reponse) => {
    Livres.find({titre: RegExp(requete.params.titreLivre, "i")}, null, {limit: 25, sort: {auteur: 1}}).exec()
    .then((livres)=>reponse.json(livres))
    .catch((err)=>console.log(err));
});
router.get('/auteur/:auteurLivre', (requete, reponse) => {
    Livres.find({auteur: RegExp(requete.params.auteurLivre, "i")}, null, {limit: 25, sort: {auteur: 1}}).exec()
    .then((livres)=>reponse.json(livres))
    .catch((err)=>console.log(err));
});
router.get('/isbn/:isbnLivre', (requete, reponse) => {
    Livres.find({isbn: RegExp(requete.params.isbnLivre, "i")}, null, {limit: 25, sort: {auteur: 1}}).exec()
    .then((livres)=>reponse.json(livres))
    .catch((err)=>console.log(err));
});
router.get('/description/:descLivre', (requete, reponse) => {
    Livres.find({description: RegExp(requete.params.descLivre, "i")}, null, {limit: 25, sort: {auteur: 1}}).exec()
    .then((livres)=>reponse.json(livres))
    .catch((err)=>console.log(err));
});
router.post('/', (requete, reponse) => {
    let livre = requete.body;
    livre._id = new mongoose.Types.ObjectId();
    Livres.create(livre)
    .then(resultat=>reponse.json(resultat))
    .catch(err=>console.log(err));
});
router.put('/:isbnLivre', (requete, reponse)=>{
    let nouveauLivre = requete.body;
    Livres.findOneAndUpdate(
        {isbn: requete.params.isbnLivre},
        nouveauLivre, 
        { new: true })
    .then(resultat=>reponse.json(resultat))
    .catch(err=>console.log(err));
});
router.delete('/:isbnLivre', (requete, reponse)=>{
    Livres.deleteOne({isbn: requete.params.isbnLivre})
    .then(res=>reponse.json(res))
    .catch(err=>console.log(err));
});

module.exports = router;