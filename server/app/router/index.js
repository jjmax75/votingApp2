module.exports = app => {
  var express = require('express');
  var router = express.Router();

  const VotingRoutes = require( './voting.routes' );
  const UserRoutes = require( './user.routes' );

  app.use( '/api', router );

  router.use( ( req, res, next ) => {
   console.log( 'request being processed' );
   console.log( 'the request body is:', req.body );
   next()
  });

  router.get( '/', (req, res) => {
   res.json( { message: 'API is up and running' } );
  });

  router.route( '/users/:email?' )
    .get( UserRoutes.getUser )
    .post( UserRoutes.addNewUser )
    .put( UserRoutes.updateUser );

  router.route( '/questions' )
    .get( VotingRoutes.getAllQuestions );

  router.route( '/question/:question_id' )
    .get( VotingRoutes.getQuestion );
};
