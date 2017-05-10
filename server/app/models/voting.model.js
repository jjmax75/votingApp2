const mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const VotingSchema = new Schema({
  'question': { type: String },
  'options': { type: Schema.Types.Mixed },
  'totals': { type: Schema.Types.Mixed }
});

module.exports = mongoose.model( 'Voting', VotingSchema );
