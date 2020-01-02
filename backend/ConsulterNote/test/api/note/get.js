
process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../app');
const conn = require('../../../connection');




describe('GET /note', () => {
 before((done) => {
    conn.connect()
     .then(() => done())
      .catch((err) => done(err));
  })
/*
  afterAll((done) => {
    conn.close()
      .then(() => done())
      .catch((err) => done(err));
  })*/
 
  it("OK, il n'y a pas de notes à récuperé ", (done) => {
    request(app).get('/note/notMatricule')
      .then((res) => {
        const body = res.body;
        expect(body.length).to.equal(0);
        done();
      })
      .catch((err) => done(err));
      
  });
  it("OK, récupération de tous les notes d'un étudiant", (done) => {
    request(app).post('/note')
      .send({ matricule:'0044', module:'thp',cc: 10 ,ci:2 ,cf: 15 ,moyenne: 10 })
      .then((res) => {
        request(app).get('/note/0044')
                    .then((res)=>{
                      const body = res.body;
                      expect(body.length).to.above(0);
                       done();
                    })
      })
      .catch((err) => done(err));
      
  });

  
})