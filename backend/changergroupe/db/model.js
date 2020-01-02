const mongoose=require('mongoose');

const Schema = mongoose.Schema;

let GroupeSchema = new Schema({
    matricule : {
        type: String
        //unique: true,
        //required: true
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
const Groupe=mongoose.model('changergroupes',GroupeSchema);
module.exports= {Groupe};