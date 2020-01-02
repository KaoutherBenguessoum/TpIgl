
const express = require('express');
const bodyParser = require('body-parser');
/**
 * une constante qui va etre exporté, appelle une fonction qui récupère les notes d'un étudiant selon son matricule
 * @param {string} -lien utiliser (/note/:matricule)
 * @param {Object} -les notes d'un étiduants 
 */
const app = express();
/**
 * Objet de type groupe contenant les informations du chamgement de groupe
 * @type {Groupe}
 */
const Note = require('./db/model').Note;

app.use(bodyParser.json());
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATH,DELETE');    
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});

app.get('/note/:matricule', (req, res) => {
    Note.find({'matricule':req.params.matricule},function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});
app.get('/note', (req, res) => {
    Note.find({},function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});
app.post('/note', (req, res) => {

    let nt = new Note(req.body);
    nt.save()
        .then(Note => {
           // res.status(200).json({'Note': 'Note added successfully'});
           res.status(201).send(nt);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});
module.exports = app;
