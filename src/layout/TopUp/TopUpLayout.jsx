import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Dashboard from "../../component/Dashboard";
import { Footer } from "../../component/Footer";
import NavBar from "../../component/NavBar";
import { topUpOption } from "../../global/topUpConstants";
import { AddBcaOneKlik } from "./OneKlik/AddBcaOneKlik";
import { AlfaInstruction } from "./AlfaInstruction";
import { BankBranchAgentInstruction } from "./BankBranchAgentInstruction";
import { BankInstruction } from "./BankInstruction";
import { BcaOneKlikInstruction } from "./BcaOneKlikIntsruction";
import { IndomaretInstruction } from "./IndomaretInstruction";
import { TopUpContent } from "./TopUpContent";
import { TopUp19 } from "./OneKlik/TopUp19";
import { TopUp49 } from "./OneKlik/TopUp49";
import { TopUp99 } from "./OneKlik/TopUp99";
import { TopUp199 } from "./OneKlik/TopUp199";

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
        <Route
          path={`${path}/branchAgent`}
          component={BankBranchAgentInstruction}
          exact
        ></Route>
        <Route
          path={`${path}/bcaOneKlik`}
          component={BcaOneKlikInstruction}
          exact
        ></Route>
        <Route
          path={`${path}/alfaGroup`}
          component={AlfaInstruction}
          exact
        ></Route>
        <Route
          path={`${path}/indomaretGroup`}
          component={IndomaretInstruction}
          exact
        ></Route>
        <Route
          path={`${path}/bcaOneKlik/add`}
          component={AddBcaOneKlik}
          exact
        ></Route>
        <Route
          path={`${path}/bcaOneKlik/19`}
          component={TopUp19}
          exact
        ></Route>
        <Route
          path={`${path}/bcaOneKlik/49`}
          component={TopUp49}
          exact
        ></Route>
        <Route
          path={`${path}/bcaOneKlik/99`}
          component={TopUp99}
          exact
        ></Route>
        <Route
          path={`${path}/bcaOneKlik/199`}
          component={TopUp199}
          exact
        ></Route>
      </Switch>

      <NavBar />
      <Footer />
    </div>
  );
};
