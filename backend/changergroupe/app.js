const express=require('./node_modules/express');
const app = express();
const con=require('./connection');
const cors=require('./node_modules/cors/lib');

const bodyParser=require('./node_modules/body-parser');
//require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

//middlewares

// imports routes
const groupeRoute=require('./grouperoute');
app.use("/groupe",groupeRoute);

//listen to server
app.listen(3000);