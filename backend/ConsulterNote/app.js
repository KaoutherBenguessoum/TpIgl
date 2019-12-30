
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Note = require('./db/model').Note;

app.use(bodyParser.json());

app.get('/note/:cc', (req, res) => {
    Note.find({'cc':req.params.cc},function(err, todos) {
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
