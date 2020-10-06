import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from "../components/App/App";
import LoginPage from "../components/LoginPage/LoginPage";
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute path="/todos">
        <App />
      </PrivateRoute>
      <Route path="/">
        <LoginPage />
      </Route>
    </Switch>
  </Router>
)

export default AppRouter;