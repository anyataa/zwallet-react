import React, { useState } from "react";
import BalanceContainer from "../component/Dashboard/BalanceContainer";
import "../style/global.css";
import Dashboard from "../component/Dashboard";
import { Footer } from "../component/Footer";
import NavBar from "../component/NavBar";
import { getAccountData, setFriendsData } from "../global";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const DashboardLayout = () => {
  const user = useSelector(state => state.user)
  
  useEffect(() => {
    setFriendsData();
    if(user.userId){
      // getAccountData(1)
      // getAccountData(user.userId)
      console.log(user.userId)
    }
  }, [])

  return (
    <div className="container">
      <Dashboard />
      <BalanceContainer />
      <NavBar />
      <Footer />
    </div>
  );
}

export default DashboardLayout;