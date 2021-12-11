import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from 'containers/Auth';
import MasterLayout from 'containers/MasterLayout';

function Routes() {
  return (
    <Switch>
      <Route path="/auth/login" component={Auth} />
      <Route path="/" component={MasterLayout} />
    </Switch>
  );
}

export default Routes;
