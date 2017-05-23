import { EventEmitter } from 'events';
import history from '../history';
import auth0 from 'auth0-js';

export default class Auth extends EventEmitter {
  auth0 = new auth0.WebAuth({
    domain: 'boxitoff.eu.auth0.com',
    clientID: 'fEW3lChJ9Uax8SNRk8mPnYhWfuSZsHES',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://boxitoff.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor() {
    super();
    this.login = this.login.bind( this );
    this.logout = this.logout.bind( this );
    this.handleAuthentication = this.handleAuthentication.bind( this );
    this.isAuthenticated = this.isAuthenticated.bind( this );
  };

  login() {
    this.auth0.authorize();
  };

  handleAuthentication() {
    this.auth0.parseHash( ( err, authResult ) => {
      if ( authResult && authResult.accessToken && authResult.idToken ) {
        this.setSession( authResult );
        history.replace( '/home' );
      } else if ( err ) {
        history.replace( '/home' );
        console.log( err );
      }
    });
  };

  setSession( authResult ) {
    if ( authResult && authResult.accessToken && authResult.idToken ) {
      let expiresAt = JSON.stringify( ( authResult.expiresIn * 1000 ) + new Date().getTime() );
      localStorage.setItem( 'access_token', authResult.accessToken );
      localStorage.setItem( 'id_token', authResult.idToken );
      localStorage.setItem( 'expires_at', expiresAt );
      history.replace( '/home' );
    }
  };

  logout() {
    localStorage.removeItem( 'access_token' );
    localStorage.removeItem( 'id_token' );
    localStorage.removeItem( 'expires_at' );
    history.replace( '/home' );
  };

  isAuthenticated() {
    let expiresAt = JSON.parse( localStorage.getItem( 'expires_at' ) );
    return new Date().getTime() < expiresAt;
  };
}
