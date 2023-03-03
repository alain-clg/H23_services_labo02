/**
 * Auteur: Alain Pilon
 * Date: 1 mars 2023
 * Description: modèle Mongoose pour accéder à la collection roles
 */
const mongoose = require('mongoose');

// schéma de données pour la collection roles
// 

let schemaRole = mongoose.Schema({
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
    },
    date: {
        type: Date,
        required: true
    },
    roles: {
        type: Array,
        required: true
    }
});
let Roles = module.exports = mongoose.model('roles', schemaRole );

// méthodes pour obtenir les users....
module.exports.getRoles = (callback, limit) => {
    Roles.find(callback).limit(limit);
}
// méthodes pour obtenir les users selon des critères de recherche par champ....
// module.exports.getUserParChamp = (champ, critere, callback, limit) => {
//     const query = {[champ]: RegExp(critere)};
//     console.log(query);
//     Users.find(query, callback).limit(limit);
// }
module.exports.ajoutRole = (role, callback) => {
    role._id = new mongoose.Types.ObjectId();
    role.date = new Date();
    // console.log(livre);
    Roles.create(role, callback);
}
// // méthode pour supprimer un user dans la BD
// // on doit fournir le login du user à supprimer
// module.exports.supprimerUser = (loginUser, callback) => {
//     let filtre = { "login": loginUser };
//     Users.deleteOne(filtre, callback);
// }
// // méthode pour modifier un user dans la BD
// // on doit fournir le login du user et le nouveau contenu du user
// module.exports.modifierUser = (loginUser, nouvUser, callback) => {
//     let filtre = { "login": loginUser };
//     let options = { };
//     let nouveauUser = {
//         login: nouvUser.login,
//         nom: nouvUser.nom,
//         pwd: nouvUser.pwd
//     };
//     Users.findOneAndUpdate(filtre, nouveauUser, options, callback);
// };