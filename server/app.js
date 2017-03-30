const express = require( 'express' );
const router = express.Router();
const morgan = require( 'morgan' );
const app = express();

// Environment
require('dotenv').config()
const port = process.env.PORT || 8080;

// Modules
app.use( morgan( 'dev' ) );

app.use( '/api', router );

app.listen( port );

console.log( 'App is listening on port', port );

module.exports = app;
