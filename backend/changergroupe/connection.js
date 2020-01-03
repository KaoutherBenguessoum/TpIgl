const mongoose = require("mongoose");
/**
 * @type {URL} - le lien d'accès à la BDD
 */
const DB_URI = "mongodb://mongo:27017/bddIgl";
//const DB_URI = "mongodb://localhost:27017/bddIgl";
/**
 * @property {Function} connect connection à la BDD
 * @returns void
 */
function connect() {
    return new Promise((resolve, reject) => {
  
      if (process.env.NODE_ENV === 'test') {

        mongoose.connect('mongodb://localhost:27017/bddIgl',
          { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true })
          .then((res, err) => {
            if (err) return reject(err);
            else console.log("connected to database test");
            resolve();
          })
        
            }
      else {mongoose
        .connect(DB_URI,{
            useNewUrlParser : true,
            useCreateIndex : true,
            useUnifiedTopology: true
        })
        .then(value => {
            console.log("connected to database");
        })
        .catch(err => {
            console.error(err);
        });
           }
   });
 }
/**
 * @property {Function} close deconnecter de la BDD
 */
 function close() {
    return mongoose.disconnect();
    }
              
module.exports = { connect, close };