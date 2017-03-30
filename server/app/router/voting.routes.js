const mongoose = require( 'mongoose' );
const VotingModel = require( './../models/voting.model' );

// get all questions
const getAllQuestions = ( req, res ) => {
  VotingModel.find( ( err, questions ) => {
    if( err ) res.send( err );
    res.json( questions );
  });
};

// get single question
const getQuestion = ( req, res ) => {
  VotingModel.findOne( { 'qustion_id': req.params.question_id }, ( err, question ) => {
    if ( err ) res.send( err );
    res.json( question );
  });
};

module.exports = { getAllQuestions, getQuestion };
