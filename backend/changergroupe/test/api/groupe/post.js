process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../app');
const conn = require('../../../connection');




describe('POST /groupe', () => {
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
 
  it("OK, insertion demande changement de groupe", (done) => {
    request(app).post('/groupe')
      .send({ matricule:'17/0188', promo:'1CS',groupeactuel: '10' ,groupevoulu:'2 ',raison: 'enseignants' ,valide: false })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('_id');
        expect(body).to.contain.property('matricule');
        expect(body).to.contain.property('promo');
        expect(body).to.contain.property('groupeactuel');
        expect(body).to.contain.property('groupevoulu');
        expect(body).to.contain.property('raison');
        expect(body).to.contain.property('valide');
        done();
      })
      .catch((err) => done(err));
      
  });

it("Fail, Erreur dans la demande", (done) => {
    request(app).post('/groupe')
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