import React, { useEffect, useState } from "react";
import { urlAPI } from "../../asset/urls";
import axios from "axios";
import { useSelector } from "react-redux";

export const BalanceTransaction = () => {
  const [Transaction, setTransaction] = useState([]);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    // getTransaction();
  }, []);

  const getTransaction = () => {
    axios
      .get(`${urlAPI}/transaction/${user.accountId}`)
      .then((res) => {
        setTransaction(res.data.listTransaction);
        console.log(res.data.listTransaction);
      })
      .catch((err) => console.log(err));
  };

  {
    /* 0 : in , 1 : out */
  }

  const renderTransaction = () => {
    if (Transaction) {
      return Transaction.slice(0, 4).map((item, idx) => (
        <div className="custom-profile-view" key={idx}>
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
            Oopsie, You Have No Transaction History Yet. . . <br />
            <br />
          </p>
          {/* <p className="col-grey">Start Your Amazing Transaction In Zwallet</p> */}
          <div className="card-notification" style={{ height: 205 }}>
            <p className="col-grey">Start Using Zwallet Now!</p>
            <img
              src={require("../../asset/icons/no-transaction.png").default}
              width={"200"}
            />
          </div>
        </div>
      );
    }
  };
  return (
    <div className="contact-list-container" style={{ height: "30rem" }}>
      <div className="overflow-auto">{renderTransaction()}</div>
    </div>
  );
};
