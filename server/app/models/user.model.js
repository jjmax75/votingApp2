const mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  'user_id': { type: String },
  'email': { type: String },
  'questions': { type: Schema.Types.Mixed }, // array of questions asked
  'answers': { type: Schema.Types.Mixed }, // array of questions answered
  'profiles': { type: Schema.Types.Mixed } // full user object from Auth0
});

module.exports = mongoose.model( 'User', UserSchema );
