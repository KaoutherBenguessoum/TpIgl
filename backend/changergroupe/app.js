
const express = require('express');
const bodyParser = require('body-parser');
/**
 * une constante qui va etre exporté, appelle une fonction qui récupère les informations du changement de groupe
 * @param {string} -lien utiliser
 * @param {Object} -les informations du chagement de groupe 
 */
const app = express();
/**
 * Objet de type groupe contenant les informations du chamgement de groupe
 * @type {Groupe}
 */
const Groupe = require('./db/model').Groupe;

app.use(bodyParser.json());

app.get('/groupe', (req, res) => {
    Groupe.find({},function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

app.post('/groupe', async (req,res) => { 
    
    let grp = new Groupe(req.body);
    console.log("on est la");
    console.log(req.body);
    grp.save()
        .then(Groupe => {
            res.status(201).send(grp);
            //res.status(200).json({'Groupe': 'Groupe added successfully'});
        })
        .catch(err => {
            res.status(400).send(err);
        });
});
module.exports = app;