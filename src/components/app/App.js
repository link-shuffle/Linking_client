import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import Main from "../../pages/Main";
import Login from "../../pages/Login";
import Search from "../../pages/Search";
import NotFound from "../../pages/NotFound";

const authenticated = true;
function App() {
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
}

export default App;
