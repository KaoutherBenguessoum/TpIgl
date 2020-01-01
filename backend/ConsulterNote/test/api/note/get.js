/*process.env.NODE_ENV = 'test';

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

  after((done) => {
    conn.close()
      .then(() => done())
      .catch((err) => done(err));
  })

  it('OK, getting notes has no notes', (done) => {
    request(app).get('/notes')
      .then((res) => {
        const body = res.body;
        expect(body.length).to.equal(0);
        done();
      })
      .catch((err) => done(err));
  });

  it('OK, getting note d"un etudiant', (done) => {
        request(app).get('/note /'{matricule:"jjjj"})
          .then((res) => {
            const body = res.body;
            expect(body.length).to.be.above(0);
            done();
      })
      .catch((err) => done(err));
  });
})*/