import React, { Component } from "react";
import BalanceContainer from "../component/Dashboard/BalanceContainer";
import "../style/global.css";
import Dashboard from "../component/Dashboard";
import { Footer } from "../component/Footer";
import NavBar from "../component/NavBar";
import { setFriendsData } from "../global";

export default class DashboardLayout extends Component {
  componentDidMount() {
    setFriendsData();
  }
  render() {
    return (
      <div className="container">
        <Dashboard />
        <BalanceContainer />
        <NavBar />
        <Footer />
      </div>
    );
  }
}
