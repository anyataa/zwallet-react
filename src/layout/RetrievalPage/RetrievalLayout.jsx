import React, { useState } from "react";
import { Route, Router, Switch, useRouteMatch } from "react-router-dom";
import Dashboard from "../../component/Dashboard";
import BalanceContainer from "../../component/Dashboard/BalanceContainer";
import { Footer } from "../../component/Footer";
import { InputNominalTransfer } from "../../component/InputNominalTransfer";
import { ModalStatus } from "../../component/ModalStatus";
import NavBar from "../../component/NavBar";
import "../../style/global.css";
import DashboardLayout from "../DashboardLayout";
import Partner from "../LandingPage/Partner";
import { RetrieveConfirmation } from "./ConfirmationRetrieve";
import { InputNominalRetrieve } from "./InputNominalRetrieve";
import PartnerList from "./PartnerList";




export default function RetrievalLayout() {
    let {path , url} = useRouteMatch();
    const [modalToggle, setModalToggle] = useState(false)
    const [activity, setActivity] = useState("Retrieve")
    return (
        <div className="container">
        <Dashboard/>
        <Switch>
            <Route path={`${path}`} component={PartnerList} exact></Route>
            <Route path={`${path}/:id`} component={InputNominalRetrieve} exact></Route>
            {/* <Route path={`${path}/:id/confirmation`} component={RetrieveConfirmation} exact></Route> */}
            <Route path={`${path}/:id/confirmation`} render={(props) => <RetrieveConfirmation {...props} setDisplay={() => setModalToggle(prevState => !prevState)} display={modalToggle}/>} />
        </Switch>
        <ModalStatus setDisplay={() => setModalToggle(prevState => !prevState)} display={modalToggle} activity={activity}  ></ModalStatus> 
        <NavBar/>
        <Footer />
      </div>
    )
}
