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
  // is it okay for me to do so? since the code is unused
  // useParams,
  // useHistory,
} from "react-router-dom";
import { TransferConfirmation } from "../component/TransferConfirmation";
import { InputNominalTransfer } from "../component/InputNominalTransfer";
import SearchContact from "./SearchContact";

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
        <Route path={`${path}/:id/confirmation`} render={(props) => <TransferConfirmation {...props} setModalToggle={() => setModalToggle(prevState => !prevState)} />} exact />
        <Route path={`${path}/status/:status`} component={TransferStatus} exact/>
        <Route path={`${path}/search/contact`} component={SearchContact} exact/>
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
