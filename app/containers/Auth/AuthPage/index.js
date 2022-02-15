import clsx from 'clsx';
import React, { useState } from 'react';
import SignIn from 'containers/Auth/SignIn';
import SignUp from 'containers/Auth/SignUp';
import ForgotPassword from 'containers/Auth/ForgotPassword';

function AuthPage() {
  const [activeClass, setActiveClass] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const onActiveClass = bool => {
    setActiveClass(bool);
  };

  return (
    <div className="auth">
      <div
        className={clsx('container', activeClass && 'right-panel-active')}
        id="container"
      >
        <div className="form-container sign-up-container">
          <SignUp />
        </div>
        <div className="form-container sign-in-container">
          {!isForgotPassword ? (
            <SignIn setIsForgotPassword={setIsForgotPassword} />
          ) : (
            <ForgotPassword setIsForgotPassword={setIsForgotPassword} />
          )}
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

export default AuthPage;
