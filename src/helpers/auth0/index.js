import Auth0Lock from 'auth0-lock';
import history from './history';
import { Auth0Config } from '../../config.js';
import { notification } from '../../components';

class Auth0Helper {
  isValid = Auth0Config.clientID && Auth0Config.domain;
  lock = this.isValid
    ? new Auth0Lock(
        Auth0Config.clientID,
        Auth0Config.domain,
        Auth0Config.options
      )
    : null;
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
  login(handleLogin) {
    this.lock.on('authenticated', authResult => {
      if (authResult && authResult.accessToken) {
        if (window) {
          localStorage.setItem('_token', authResult.accessToken);
        }
        handleLogin();
      } else {
        notification('error', 'Wrong mail or password');
      }
    });
    this.lock.show();
  }
  handleAuthentication(props) {
    localStorage.setItem('_token', 'secret token');
    history.replace('/dashboard');
  }
  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    return (
      new Date().getTime() < JSON.parse(localStorage.getItem('expires_at'))
    );
  }
}
export default new Auth0Helper();
