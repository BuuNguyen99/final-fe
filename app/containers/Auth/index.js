import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from './AuthPage';
import ResetPassword from './ResetPassword';

function Auth() {
  useEffect(() => {
    document.body.classList.add('bg-white');
    return () => {
      document.body.classList.remove('bg-white');
    };
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/auth/login" component={AuthPage} />
        <Route path="/auth/reset-password" component={ResetPassword} />
        <Redirect from="/auth" exact to="/auth/login" />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
}

export default Auth;
