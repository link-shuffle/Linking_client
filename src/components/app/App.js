import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./reset.css";

import AuthRoutes from "./AuthRoutes";
import Main from "../../pages/main/Main";
import Login from "../../pages/login/Login";
import Search from "../../pages/search/Search";
import NotFound from "../../pages/error/NotFound";

const authenticated = true;

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AuthRoutes
            exact
            path="/"
            authenticated={authenticated}
            component={Main}
          />
          <Route path="/login" component={Login} />
          <Route path="/Search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
