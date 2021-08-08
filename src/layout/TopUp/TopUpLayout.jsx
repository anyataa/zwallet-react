import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Dashboard from "../../component/Dashboard";
import { Footer } from "../../component/Footer";
import NavBar from "../../component/NavBar";
import { topUpOption } from "../../global/topUpConstants";
import { BankInstruction } from "./BankInstruction";
import { TopUpContent } from "./TopUpContent";

export const TopUpLanding = () => {
  const option = topUpOption;
  let { path, url } = useRouteMatch();
  return (
    <div className="container">
      <Dashboard />
      <Switch>
        <Route path={`${path}`} component={TopUpContent} exact></Route>
        <Route
          path={`${path}/bankTransfer`}
          component={BankInstruction}
          exact
        ></Route>
      </Switch>

      <NavBar />
      <Footer />
    </div>
  );
};
