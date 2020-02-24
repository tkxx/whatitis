import React from "react";
import { Switch, Route } from "react-router-dom";
import Work from "./components/Work/work";
import Main from "./components/Main/main";

export default (
  <Switch>
    <Route path="/work" component={Work} />
    <Route exact path="/" component={Main} />
  </Switch>
);
