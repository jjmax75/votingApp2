const express = require( 'express' );
const router = express.Router();
const mongoose = require( 'mongoose' );
const morgan = require( 'morgan' );
const app = express();

// Environment
require('dotenv').config()
const port = process.env.PORT || 8080;

// Routes
const VotingRoutes = require( './app/router/voting.routes' );

// DB
process.env.NODE_ENV === 'test' ?
  mongoose.connect( process.env.TEST_DB_URI ) :
  mongoose.connect( process.env.DB_URI );
const VotingModel = require( './app/models/voting.model' );

// Modules
app.use( morgan( 'dev' ) );

app.use( '/api', router );

router.use( ( req, res, next ) => {
  console.log( 'request being processed' );
  next()
});

router.get( '/', (req, res) => {
  res.json( { message: 'API is up and running' } );
});

router.route( '/questions' )
  .get( VotingRoutes.getAllQuestions );

router.route( '/question/:question_id' )
  .get( VotingRoutes.getQuestion );

app.listen( port );

console.log( 'App is listening on port', port );

module.exports = app;
