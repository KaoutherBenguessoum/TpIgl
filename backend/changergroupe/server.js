const app = require('./app');
const db = require('./connection');
var cors=require('cors');
/**
 * @type {number} le numéro du port utilisé pour la fonctionnalité demandeChangerGroupe
 */
const PORT=  3001;

app.use(cors());
process.env.NODE_ENV = 'not test';
db.connect();
app.listen(PORT, () => {
      console.log('Listening on port: ' + PORT);
  });