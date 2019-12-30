const express=require('express');
const app = express();
const con=require('./connection');
//const con=require('../changergroupe/connection');
const cors=require('cors');

const bodyParser=require('body-parser');
//require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

//middlewares

// imports routes
const noteRoute=require('./noteroute');
app.use("/note",noteRoute);

//listen to server
app.listen(1234);