import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from './AuthPage';

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
        <Redirect from="/auth" exact to="/auth/login" />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
}

export default Auth;
