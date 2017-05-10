const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const morgan = require( 'morgan' );
const app = express();

// Environment
require( 'dotenv' ).config()
const port = process.env.PORT || 8080;

// Routes
const routes = require( './app/router/index' );

// DB
process.env.NODE_ENV === 'test' ?
  mongoose.connect( process.env.TEST_DB_URI ) :
  mongoose.connect( process.env.DB_URI );

// Modules
app.use( morgan( 'dev' ) );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );
routes( app );

app.listen( port );

console.log( 'App is listening on port', port );

module.exports = app;
