const mongoose=require('mongoose');

const Schema = mongoose.Schema;

let GroupeSchema = new Schema({
    matricule : {
        type: String,
        unique: true,
        required: true
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
const Groupe=mongoose.model('changergroupe',GroupeSchema);
module.exports= {Groupe};