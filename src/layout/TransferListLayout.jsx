import React, { Component } from "react";
import "../style/global.css";
import NavBar from "../component/NavBar";
import ListContact from "../component/ListContact";
import { Footer } from "../component/Footer";
import Dashboard from "../component/Dashboard";

export default class TransferListLayout extends Component {
  render() {
    return (
      <div className="container">
        <Dashboard />
        <NavBar />
       
        <ListContact />

        <Footer />
      </div>
    );
  }
}
