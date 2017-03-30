const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const VotingSchema = new Schema({
  'question': { type: String },
  'options': { type: Schema.Types.Mixed },
  'totals': { type: Schema.Types.Mixed }
});

const VotingModel = mongoose.model( 'Voting', VotingSchema );

module.exports = VotingModel;
