import React from "react";
import { Route, Router, Switch, useRouteMatch } from "react-router-dom";
import Dashboard from "../../component/Dashboard";
import BalanceContainer from "../../component/Dashboard/BalanceContainer";
import { Footer } from "../../component/Footer";
import { InputNominalTransfer } from "../../component/InputNominalTransfer";
import NavBar from "../../component/NavBar";
import "../../style/global.css";
import DashboardLayout from "../DashboardLayout";
import Partner from "../LandingPage/Partner";
import { RetrieveConfirmation } from "./ConfirmationRetrieve";
import { InputNominalRetrieve } from "./InputNominalRetrieve";
import PartnerList from "./PartnerList";




export default function RetrievalLayout() {
    let {path , url} = useRouteMatch();
    return (
        <div className="container">
        <Dashboard/>
        <Switch>
            <Route path={`${path}`} component={PartnerList} exact></Route>
            <Route path={`${path}/:id`} component={InputNominalRetrieve} exact></Route>
            <Route path={`${path}/:id/confirmation`} component={RetrieveConfirmation} exact></Route>
        </Switch>
        <NavBar/>
        <Footer />
      </div>
    )
}
