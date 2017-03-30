process.env.NODE_ENV = 'test';

const mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;
const VotingModel = require( './../app/models/voting.model' );

const chai = require( 'chai' );
const chaiHttp = require( 'chai-http' );
const app = require( './../app' );
const should = chai.should();

chai.use( chaiHttp );

describe( 'Questions', () => {
  before( done => {
    VotingModel.remove({}, err => {
      done();
    });
  });

  // test Get all videos
  describe( '/GET questions', () => {
    it( 'should GET all the questions', done => {
      chai.request( app )
        .get( '/api/questions' )
        .end( (err, res) => {
          res.should.have.status( 200 );
          res.body.should.be.a( 'array' );
          res.body.length.should.be.eql( 0);
          done();
        });
    });
  });
});
