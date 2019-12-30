const mongoose = require("mongoose");
const DB_URI = "mongodb://mongo:27017/bddIgl";

//require('dotenv/config');
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

 function close() {
    return mongoose.disconnect();
    }
              
module.exports = { connect, close };