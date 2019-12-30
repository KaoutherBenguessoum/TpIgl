
process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../app');
const conn = require('../../../connection');




describe('POST /note', () => {
 before((done) => {
    conn.connect()
     .then(() => done())
      .catch((err) => done(err));
  })

  after((done) => {
    conn.close()
      .then(() => done())
      .catch((err) => done(err));
  })
 
  it("OK, creating a new note works", (done) => {
    request(app).post('/note')
      .send({ matricule:'80/012', module:'thp',cc: 10 ,ci:2 ,cf: 15 ,moyenne: 10 })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('_id');
        expect(body).to.contain.property('matricule');
        expect(body).to.contain.property('module');
        expect(body).to.contain.property('cc');
        expect(body).to.contain.property('ci');
        expect(body).to.contain.property('cf');
        expect(body).to.contain.property('moyenne');
        done();
      })
      .catch((err) => done(err));
      
  });

it("Fail, no note", (done) => {
    request(app).post('/note')
      .send({})
      .then((res) => {
        const body = res.body;
        expect(body.errors.matricule.name)
          .to.equal('ValidatorError')
        done();
      })
      .catch((err) => done(err));
  });
})