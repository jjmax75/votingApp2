const mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  'user_id': { type: String },
  'email': { type: String },
  'questions': { type: Schema.Types.Mixed },
  'answers': { type: Schema.Types.Mixed },
  'profiles': { type: Schema.Types.Mixed }
});

module.exports = mongoose.model( 'User', UserSchema );
