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
// import ElectricityBill from "./ElectricityBill";
import InternetBill from "./InternetBill";
import EcommerceBill from "./EcommerceBill";
import { DepartureResult } from "./DepartureResult";
import { ArrivalResult } from "./ArrivalResult";
import { FlightSummary } from "./FlightSummary";
import { ModalStatus } from "../../component/ModalStatus";
import { useState } from "react";
import { ElectricityBill } from "./ElectricityBill";

const PaymentLayout = () => {
  const [modalToggle, setModalToggle] = useState(false);
  let { path, url } = useRouteMatch();
  return (
    <div className="container">
      <Dashboard />
      <Switch>
        <Route path={`${path}`} component={PaymentList} exact></Route>
        <Route
          path={`${path}/electricity`}
          component={InputElectricity}
          exact
        />
        <Route path={`${path}/internet`} component={InputInternet} exact />
        <Route path={`${path}/transport`} component={InputTransport} exact />
        <Route path={`${path}/ecommerce`} component={InputEcommerce} exact />
        {/* <Route
          path={`${path}/electricity/pln`}
          component={ElectricityBill}
          exact
        /> */}
        <Route
          path={`${path}/electricity/pln`}
          exact
          render={(props) => (
            <ElectricityBill
              {...props}
              setDisplay={() => setModalToggle((prevState) => !prevState)}
              display={modalToggle}
            />
          )}
        />
        {/* <Route
          path={`${path}/internet/indihome`}
          component={InternetBill}
          exact
        /> */}
        <Route
          path={`${path}/internet/indihome`}
          exact
          render={(props) => (
            <InternetBill
              {...props}
              setDisplay={() => setModalToggle((prevState) => !prevState)}
              display={modalToggle}
            />
          )}
        />
        {/* <Route
          path={`${path}/ecommerce/tokopedia`}
          component={EcommerceBill}
          exact
        /> */}
        <Route
          path={`${path}/ecommerce/tokopedia`}
          exact
          render={(props) => (
            <EcommerceBill
              {...props}
              setDisplay={() => setModalToggle((prevState) => !prevState)}
              display={modalToggle}
            />
          )}
        />
        <Route
          path={`${path}/transport/departresult`}
          component={DepartureResult}
          exact
        />

        <Route
          path={`${path}/transport/departresult/arrival`}
          component={ArrivalResult}
          exact
        />
        {/* <Route
          path={`${path}/transport/departresult/arrival/summary`}
          component={FlightSummary}
          exact
        /> */}
        <Route
          path={`${path}/transport/departresult/arrival/summary`}
          exact
          render={(props) => (
            <FlightSummary
              {...props}
              setDisplay={() => setModalToggle((prevState) => !prevState)}
              display={modalToggle}
            />
          )}
        />
      </Switch>
      <NavBar />
      <ModalStatus
        setDisplay={() => setModalToggle((prevState) => !prevState)}
        display={modalToggle}
      ></ModalStatus>
      <Footer />
    </div>
  );
};

export default PaymentLayout;
