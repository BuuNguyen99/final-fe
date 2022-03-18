import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from './AuthPage';
import Register from './Register';
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
        <Route path="/auth/register" component={Register} />
        <Redirect from="/auth" exact to="/auth/login" />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
}

export default Auth;
