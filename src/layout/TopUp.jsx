import React, { useEffect, useState } from "react";
import "../style/dashboard.css";
import "../style/global.css";
import "../style/navBar.css";
import "../style/Font/style.css";
import NavBar from "../component/NavBar";
import { Footer } from "../component/Footer";
import Dashboard from "../component/Dashboard";
import ListTopUp from "../component/ListTopUp";

const TopUp = () => {
    const [UserData, setUserData] = useState({})
    const [PhoneNumber, setPhoneNumber] = useState("")
    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem('userData')))
        if(JSON.parse(localStorage.getItem('userData'))){
          setPhoneNumber(JSON.parse(localStorage.getItem('userData')).user.phonenumber? JSON.parse(localStorage.getItem('userData')).user.phonenumber.slice(1): null)
        }
        
    }, [ ])
  const TopUpDetail = [
    {
      number: "1",
      statement: "Go to the nearest ATM or you can use E-Banking",
    },
    {
      number: "2",
      statement: "Type your security number on the ATM or E-Banking.",
    },
    {
      number: "3",
      statement:
        "Type the virtual account number that we provide you at the top.",
    },
    {
      number: "4",
      statement: "Type the amount of the money you want to top up.",
    },
    {
      number: "5",
      statement: "Read the summary details.",
    },
    {
      number: "6",
      statement: "Press transfer / top up.",
    },
    {
      number: "7",
      statement: "You can see your money in Zwallet within 3 hours.",
    },
    {
      number: "8",
      statement: "Type your security number on the ATM or E-Banking.",
    },
  ];

  return (
    <div className="container">
      <Dashboard />
      <NavBar />
      <div className="right-top-up">
        <div className="top-up-container">
          <ul>
            <li>
              <h2 className="col-dark-grey">
                How To Top Up?
                <span className="col-secondary">
                  &nbsp;  Your Virtual Account Number: 045-{PhoneNumber}
                </span>
              </h2>
            </li>

            {TopUpDetail.map((element) => {
              return (
                <li>
                  <ListTopUp
                    number={element.number}
                    statement={element.statement}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopUp;
