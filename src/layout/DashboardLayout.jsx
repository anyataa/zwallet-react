import React, { Component } from "react";
import BalanceContainer from "../component/Dashboard/BalanceContainer";
import "../style/global.css";
import Dashboard from "../component/Dashboard";
import { Footer } from "../component/Footer";
import NavBar from "../component/NavBar";
import { getAccountData, setFriendsData } from "../global";

export default class DashboardLayout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       x : 0
    }
  }
  
  componentDidMount() {
    setFriendsData();
    getAccountData(JSON.parse(localStorage.getItem("userData")).user.account.accountId)
    this.setState(x => { x = x+1 })

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
