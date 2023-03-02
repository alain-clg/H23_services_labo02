/**
 * Auteur: Alain Pilon
 * Date: 1 mars 2023
 * Description: modèle Mongoose pour accéder à la collection users
 */
const mongoose = require('mongoose');

// schéma de données pour la collection users
// 

let schemaUser = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    }
});
let Users = module.exports = mongoose.model('users', schemaUser );

// méthodes pour obtenir les users....
module.exports.getUsers = (callback, limit) => {
    Users.find(callback).limit(limit);
}
// méthodes pour obtenir les users selon des critères de recherche par champ....
module.exports.getUserParChamp = (champ, critere, callback, limit) => {
    const query = {[champ]: RegExp(critere)};
    console.log(query);
    Users.find(query, callback).limit(limit);
}
module.exports.ajoutLUser = (user, callback) => {
    user._id = new mongoose.Types.ObjectId();
    // console.log(livre);
    Users.create(user, callback);
}
// méthode pour supprimer un user dans la BD
// on doit fournir le login du user à supprimer
module.exports.supprimerUser = (loginUser, callback) => {
    let filtre = { "login": loginUser };
    Users.deleteOne(filtre, callback);
}