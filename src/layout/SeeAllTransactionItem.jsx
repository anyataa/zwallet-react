import axios from "axios";
import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { urlAPI } from "../asset/urls";
import { setTransactionData } from "../global";

export const SeeAllTransactionItem = (props) => {
  const user = useSelector((state) => state.user);
  const [AllTransaction, setAllTransaction] = useState([]);
  const [DailyTransaction, setDailyTransaction] = useState([]);
  const [MonthlyTransaction, setMonthlyTransaction] = useState([]);
  const [WeeklyTransaction, setWeeklyTransaction] = useState([]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    if (user.userId != "") {
      getTransactionData();
    }
  }, []);

  const getTransactionData = () => {
    axios
      .get(`${urlAPI}/transaction/${user.accountId}`)
      .then((res) => {
        setTransactionData(res.data);
        setDailyTransaction(res.data.list2Day);
        setWeeklyTransaction(res.data.list2Week);
        setAllTransaction(res.data.listTransaction);
      })
      .catch((err) => console.log(err));
  };

  const renderTransaction = (Transaction) => {
    if (Transaction && Transaction.length > 0) {
      return Transaction.map((item) => (
        <div className="custom-profile-view">
          <div className="profile-container">
            <div className="profile-img">
              <img
                src={
                  item.userImage
                    ? item.userImage
                    : "https://i.ibb.co/FHLx6h9/default.png"
                }
                alt=""
              />
            </div>
            <div className="profile-data">
              {/* 0 : in , 1 : out */}
              {item.receiver == user.userName ? (
                <h3 className="col-grey">{item.sender}</h3>
              ) : (
                <h3 className="col-grey">{item.receiver}</h3>
              )}
              {/* {item.transactionDetails == 0   ? <p className="col-grey">Transfer</p> :  <p className="col-grey">Subscription</p>} */}
              <p className="col-grey">
                {item.transactionDetails == 1
                  ? "Transfer"
                  : item.transactionDetails == 2
                  ? "Subscription"
                  : item.transactionDetails == 3
                  ? "Payment"
                  : item.transactionDetails == 4
                  ? "Top Up"
                  : item.transactionDetails == 5
                  ? "Retrieve"
                  : "Other"}
              </p>
            </div>
          </div>
          {item.receiver == user.userName ? (
            <h2 className="col-green">
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(item.amount)}
            </h2>
          ) : (
            <h2 className="col-red">
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(item.amount)}
            </h2>
          )}
        </div>
      ));
    } else {
      return (
        <div>
          <p className="col-grey" style={{ fontSize: 30 }}>
            <br />
            Oopsie, You Have No Transaction Yet. . . <br />
            <br />
          </p>
          {/* <p className="col-grey">Start Your Amazing Transaction In Zwallet</p> */}
          <div className="card-notification" style={{ height: 205 }}>
            <p className="col-grey">Start Using Zwallet Now!</p>
            <img
              src={require("../asset/icons/no-transaction.png").default}
              width={"200"}
            />
          </div>
        </div>
      );
    }
  };

  switch (props.data) {
    case "daily":
      return (
        <div className="overflow-auto">
          {renderTransaction(DailyTransaction)}
        </div>
      );

    case "all":
      return (
        <div className="overflow-auto">{renderTransaction(AllTransaction)}</div>
      );

    case "weekly":
      return (
        <div className="overflow-auto">
          {renderTransaction(WeeklyTransaction)}
        </div>
      );

    default:
      return <div className="overflow-auto">{renderTransaction()}</div>;
  }
};
