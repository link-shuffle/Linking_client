import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContext } from "../../MyContext";

import "./reset.css";

import AuthRoutes from "./AuthRoutes";
import Main from "../main/Main";
import Login from "../login/Login";
import Search from "../search/Search";
import NotFound from "../error/NotFound";

const App = () => {
  const accessToken = sessionStorage.getItem("accessToken");

  const [userName, setUserName] = useState("");
  const setCurrentUserName = userName => {
    setUserName(userName);
  };

  return (
    <div className="App">
      <Router>
        <AppContext.Provider value={{ userName, setCurrentUserName }}>
          <Switch>
            <AuthRoutes
              exact
              path="/"
              accessToken={accessToken}
              component={Main}
            />
            <Route path="/directory/:dir_id" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/Search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </AppContext.Provider>
      </Router>
    </div>
  );
};

export default App;
