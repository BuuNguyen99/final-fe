import clsx from 'clsx';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Google from 'assets/images/google.png';
import Facebook from 'assets/images/facebook.png';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { CookiesStorage } from '../../shared/configs/cookie';

function Auth() {
  const history = useHistory();
  const [activeClass, setActiveClass] = useState(false);

  const onActiveClass = bool => {
    setActiveClass(bool);
  };

  const responseGoogle = response => {
    if (response) {
      CookiesStorage.setAccessToken(response.accessToken);
      history.push('/');
    }
  };

  const responseFacebook = response => {
    if (response) {
      CookiesStorage.setAccessToken(response.accessToken);
      history.push('/');
    }
  };

  return (
    <div className="auth">
      <div
        className={clsx('container', activeClass && 'right-panel-active')}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <img src={Google} alt="google" />
              </a>
              <a href="#" className="social">
                <img src={Facebook} alt="facebook" />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <GoogleLogin
                clientId="593232437030-jjoomdi7vk80ias9nitg972hidqldned.apps.googleusercontent.com"
                render={renderProps => (
                  <a
                    href
                    className="social"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img src={Google} alt="google" />
                  </a>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />
              <FacebookLogin
                appId="3099746133590653"
                callback={responseFacebook}
                render={renderProps => (
                  <a
                    href
                    className="social"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img src={Facebook} alt="facebook" />
                  </a>
                )}
              />
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button type="button">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                type="button"
                onClick={() => onActiveClass(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                type="button"
                onClick={() => onActiveClass(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
