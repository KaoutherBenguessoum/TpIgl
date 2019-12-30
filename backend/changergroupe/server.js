const app = require('./app');
const db = require('./connection');
const PORT=  3000;


process.env.NODE_ENV = 'not test';
db.connect();
app.listen(PORT, () => {
      console.log('Listening on port: ' + PORT);
  });