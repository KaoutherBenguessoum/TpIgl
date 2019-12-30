const mongoose=require('mongoose');

const Schema = mongoose.Schema;

let Note = new Schema({
    matricule : {
        type: String
    },
    module: {
        type: String
    },
    cc: {
        type: Number
    },
    ci: {
        type: Number
    },
    cf: {
        type: Number
    },
    moyenne: {
        type: Number
    }
    
});


module.exports= mongoose.model('notemodule',Note);