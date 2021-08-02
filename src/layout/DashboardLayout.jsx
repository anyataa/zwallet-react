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
    if(JSON.parse(localStorage.getItem("userData"))){
      // getAccountData(1)
      // getAccountData(JSON.parse(localStorage.getItem("userData")).userId)
      console.log(JSON.parse(localStorage.getItem("userData")).userId)
      this.setState(x => { x = x+1 })
    }

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
