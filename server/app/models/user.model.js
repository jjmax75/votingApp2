const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  'user_id': { type: String },
  'email': { type: String },
  'questions': { type: Schema.Types.Mixed },
  'answers': { type: Schema.Types.Mixed },
  'profiles': { type: Schema.Types.Mized }
});

const UserModel = mongoose.model( 'User', UserSchema );

module.exports = UserModel;
