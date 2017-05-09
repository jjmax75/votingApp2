const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  'user_id': { type: String },
  'email': { type: String },
  'questions': { type: Schema.Types.Mixed },
  'answers': { type: Schema.Types.Mixed },
  'profiles': { type: Schema.Types.Mized }
});

module.exports = mongoose.model( 'User', UserSchema );
