const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://alain:paulpaul@cluster0.yml6m.mongodb.net/labo01');





// pas remonter plus haut....

app.use(express.json());

const db = mongoose.connection;
db.on('error', (err) => {
    console.error('erreur de BD:', err);
});
db.once('open', () => {
    console.log('Connexion à la BD OK!!!');
});

app.use('/', require('./routes/index'));
app.use('/api/livres', require('./routes/apiLivres'));
app.use('/api/users', require('./routes/apiUsers'));

app.listen(8000);

console.log('Service Web fonctionnel sur port 8000');
