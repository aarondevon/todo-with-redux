import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from "../components/App/App";
import LoginPage from "../components/LoginPage/LoginPage";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/todos">
        <App />
      </Route>
      <Route path="/">
        <LoginPage />
      </Route>
    </Switch>
  </Router>
)

export default AppRouter;