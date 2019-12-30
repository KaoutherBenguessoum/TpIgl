const mongoose=require('mongoose');

const Schema = mongoose.Schema;

let NoteSchema = new Schema({
    matricule : {
        type: String,
        unique: true,
        required:true
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
const Note = mongoose.model('notemodule', NoteSchema)

module.exports = { Note };