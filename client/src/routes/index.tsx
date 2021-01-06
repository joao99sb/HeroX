import React from 'react';
import { Switch } from 'react-router-dom';
import { SignUp } from '../pages/SignUp';
import { LogIn } from '../pages/LogIn';
import { Dashboard } from '../pages/Dashboard';
import { NewIncident } from '../pages/NewIncident';
import { FirstPage } from '../pages/FirstPage';
import { Route } from './Route';
import { Incident } from '../pages/Incident';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={FirstPage} />
    <Route path="/login" exact component={LogIn} />
    <Route path="/signup" component={SignUp} exact />
    <Route path="/dashboard" component={Dashboard} isPrivate exact />
    <Route
      path="/dashboard/new_incident"
      component={NewIncident}
      isPrivate
      exact
    />
    <Route path="/incidents/:incident+" component={Incident} />
  </Switch>
);
