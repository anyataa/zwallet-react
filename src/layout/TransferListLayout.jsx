import React, { useState } from "react";
import "../style/global.css";
import NavBar from "../component/NavBar";
import ListContact from "../component/ListContact";
import { Footer } from "../component/Footer";
import Dashboard from "../component/Dashboard";
import { ModalPin } from "../component/ModalPin";
import TransferStatus from "./TransferStatus";

const TransferListLayout = () => {
  const [modalToggle, setModalToggle] = useState(false);
  
  return (
    <div className="container">
      <Dashboard />
      <NavBar />
      <ListContact setModalToggle={() => setModalToggle(prevState => !prevState)}/>
      {/* <TransferStatus/> */}
      {/* manage onclick here */}
      <ModalPin modalToggle={modalToggle} setModalToggle={() => setModalToggle(prevState => !prevState)}/>
      <Footer />
    </div>
  );
}

export default TransferListLayout