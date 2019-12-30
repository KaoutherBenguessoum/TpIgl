const mongoose=require('mongoose');

const Schema = mongoose.Schema;

let Groupe = new Schema({
    matricule : {
        type: String
    },
    promo: {
        type: String
    },
    groupeactuel: {
        type: String
    },
    groupevoulu: {
        type: String
    },
    raison: {
        type: String
    },
    valide: {
        type: Boolean
    }
    
});

module.exports= mongoose.model('changergroupe',Groupe);