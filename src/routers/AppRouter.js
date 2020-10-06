import React from 'react';
import {
  Router,
  Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from "../components/App/App";
import LoginPage from "../components/LoginPage/LoginPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute path="/todos">
        <App />
      </PrivateRoute>
      <PublicRoute path="/">
        <LoginPage />
      </PublicRoute>
    </Switch>
  </Router>
)

export default AppRouter;