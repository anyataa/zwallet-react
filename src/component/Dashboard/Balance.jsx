import React, { useEffect, useReducer, useState } from "react";
import { FaArrowUp, FaPlus, FaTicketAlt, FaWallet } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Balance() {
  const [BalanceFormat, setBalanceFormat] = useState(
    Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(0)
  );

  const user = useSelector((state) => state.user);

  useEffect(() => {
    setBalanceFormat(
      Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(user ? user.accountBalance : 0)
    );
  }, []);

  return (
    <div className="profile-top-container set-margin-for-dash">
      <div className="margin-profile-container">
        {console.log(user.userId)}
        <div className="balance-detail">
          <div className="row-balance">
            <h3>Balance</h3>
            <h1 className="col-white">{BalanceFormat}</h1>
            <Link style={{ textDecoration: "none" }} to="/retrieval">
              <div className="button-alpha">
                <FaWallet></FaWallet>
                <h3>Retrieve</h3>
              </div>
            </Link>
          </div>
          <div className="row-balance"></div>
          <div className="row-balance">
            <Link style={{ textDecoration: "none" }} to="/transfer">
              <div className="button-alpha">
                <FaArrowUp></FaArrowUp>
                <h3>Transfer</h3>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/topup">
              <div className="button-alpha">
                <FaPlus></FaPlus>
                <h3>Top Up</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
