import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Dashboard from "../../component/Dashboard";
import { Footer } from "../../component/Footer";
import NavBar from "../../component/NavBar";
import PaymentList from "../Payment/PaymentList";
import InputElectricity from "./InputElectricity";
import InputInternet from "./InputInternet";
import InputEcommerce from "./InputEcommerce";
import InputTransport from "./InputTransport";
import ElectricityBill from "./ElectricityBill";
import InternetBill from "./InternetBill";
import EcommerceBill from "./EcommerceBill";

const PaymentLayout = () => {
  let {path , url} = useRouteMatch();
  return (
    <div className="container">
   <Dashboard/>
        <Switch>
            <Route path={`${path}`} component={PaymentList} exact></Route>
            <Route path={`${path}/electricity`} component={InputElectricity} exact/>
            <Route path={`${path}/internet`} component={InputInternet} exact/>
            <Route path={`${path}/transport`} component={InputTransport} exact/>
            <Route path={`${path}/ecommerce`} component={InputEcommerce} exact/>
            <Route path={`${path}/electricity/pln`} component={ElectricityBill} exact/>
            <Route path={`${path}/internet/indihome`} component={InternetBill} exact/>
            <Route path={`${path}/ecommerce/tokopedia`} component={EcommerceBill} exact/>
        </Switch>
        <NavBar/>
        <Footer />
        
    </div>
  );
};

export default PaymentLayout
