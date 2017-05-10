const UserModel = require( './../models/user.model' );

// add a new user
const addNewUser = ( req, res ) => {
  let user = new UserModel();
  user.email = req.body.email;

  user.save( ( err ) => {
    if( err ) res.send( err );
    res.json( { message: 'User created' } );
  });
};

module.exports = { addNewUser };
