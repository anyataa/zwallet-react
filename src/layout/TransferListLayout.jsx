import React, { Component } from "react";
import "../style/global.css";
import NavBar from "../component/NavBar";
import ListContact from "../component/ListContact";
import { Footer } from "../component/Footer";
import Dashboard from "../component/Dashboard";
import { ModalPin } from "../component/ModalPin";

export default class TransferListLayout extends Component {
  render() {
    return (
      <div className="container">
        <Dashboard />
        <NavBar />
        <ListContact />
        {/* manage onclick here */}
        <ModalPin></ModalPin>
        <Footer />
      </div>
    );
  }
}
