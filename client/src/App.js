import React, { Component } from 'react';
import './App.css';

class App extends Component {

  login() {
    this.props.auth.login();
  };

  logout() {
    this.props.auth.logout();
  };

  render() {
    console.log( 'props:', this.props );

    const { isAuthenticated } = this.props.auth;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Login</h2>
        </div>
        <p className="auth">
          { !isAuthenticated() ?
                <button type="submit" onClick={ this.login.bind( this ) }>
                  Login
                </button>
             :
              <button type="submit" onClick={ this.logout.bind( this ) }>
                Logout
              </button>
          }
        </p>

      </div>
    );
  }
}

export default App;
