import React, { useState, useEffect, Children } from "react";
import "../style/global.css";
import NavBar from "../component/NavBar";
import ListContact from "../component/ListContact";
import { Footer } from "../component/Footer";
import Dashboard from "../component/Dashboard";
import { ModalPin } from "../component/ModalPin";
import TransferStatus from "./TransferStatus";
import {
  Route,
  Switch,
  useRouteMatch,
  useParams,
  useHistory,
} from "react-router-dom";
import { TransferConfirmation } from "../component/TransferConfirmation";
import { InputNominalTransfer } from "../component/InputNominalTransfer";

const TransferListLayout = () => {
  const [modalToggle, setModalToggle] = useState(false);

  let { path, url } = useRouteMatch();

  return (
    <div className="container">
      <Dashboard />
      <NavBar />
      <Switch>
        <Route path={`${path}`} component={ListContact} exact/>
        <Route path={`${path}/:id`} component={InputNominalTransfer} exact/>
        <Route path={`${path}/:id/confirmation`} render={(props) => <TransferConfirmation {...props} setModalToggle={() => setModalToggle(prevState => !prevState)} />} />
        <Route path={`${path}/:id/status`} component={TransferStatus} />
      </Switch>
      {/* <ListContact setModalToggle={() => setModalToggle(prevState => !prevState)}/> */}
      {/* <TransferConfirmation/> */}
      {/* <TransferStatus/> */}
      {/* manage onclick here */}
      <ModalPin
        modalToggle={modalToggle}
        setModalToggle={() => setModalToggle((prevState) => !prevState)}
      />
      <Footer />
    </div>
  );
};

export default TransferListLayout;
