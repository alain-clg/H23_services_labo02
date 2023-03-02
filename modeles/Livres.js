/**
 * Auteur: Alain Pilon
 * Date: 1 mars 2023
 * Description: modèle Mongoose pour accéder à la collection livres
 */
const mongoose = require('mongoose');

// schéma de données pour la collection Livres
// 

let schemaLivre = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    titre: {
        type: String,
        required: true
    },
    auteur: {
        type: String,
        required: true
    },
    editeur: {
        type: String,
        required: true
    },
    langue: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    nbPage: {
        type: Number,
        required: false
    }
});
let Livres = module.exports = mongoose.model('livres', schemaLivre );

// méthodes pour obtenir les livres....
module.exports.getLivres = (callback, limit) => {
    Livres.find(callback).limit(limit);
}
// méthodes pour obtenir un livre par son id....
module.exports.getLivreParChamp = (nomChamp, critere, callback) => {
    // let query = new Object();
    // query[nomChamp] = RegExp(critere);
    const query = {[nomChamp]: RegExp(critere)};
    console.log(query);
    Livres.find(query, callback);
}
// méthode pour ajouter un livre à la BD
// le livre reçu en format JSON ne contient pas le champ
// _id qui est obligatoire, on le crée avec mongoose
module.exports.ajoutLivre = (livre, callback) => {
    livre._id = new mongoose.Types.ObjectId();
    // console.log(livre);
    Livres.create(livre, callback);
}
// méthode pour supprimer un livre dans la BD
// on doit fournir l'isbn du livre à supprimer
module.exports.supprimerLivre = (isbnLivre, callback) => {
    let filtre = { "isbn": isbnLivre };
    Livres.deleteOne(filtre, callback);
};
// méthode pour modifier un livre dans la BD
// on doit fournir l'isbn du livre et le nouveau contenu du livre
module.exports.modifierLivre = (isbnLivre, nouvLivre, callback) => {
    let filtre = { "isbn": isbnLivre };
    let options = { };
    let nouveauLivre = {
        auteur: nouvLivre.auteur,
        titre: nouvLivre.titre,
        description: nouvLivre.description,
        editeur: nouvLivre.editeur,
        nbPage: nouvLivre.nbPage,
        langue: nouvLivre.langue,
        isbn: nouvLivre.isbn,
        prix: nouvLivre.prix
    };
    Livres.findOneAndUpdate(filtre, nouveauLivre, options, callback);
};