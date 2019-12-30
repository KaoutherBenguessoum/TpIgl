
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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