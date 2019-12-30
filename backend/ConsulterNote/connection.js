const mongoose = require("mongoose");
const url = "mongodb://mongo:27017/bddIgl";
//require('dotenv/config');
mongoose
    .connect(url,{
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
exports.connection=mongoose.connection ;