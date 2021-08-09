import React from "react";
import Dashboard from "../component/Dashboard";
import NavBar from "../component/NavBar";
import { Footer } from "../component/Footer";
import { BalanceTransaction } from "../component/Dashboard/BalanceTransaction";
import { SeeAllTransactionItem } from "./SeeAllTransactionItem";

export const SeeAllTransaction = () => {
  return (
    <div className="container">
      <Dashboard />
      <div className="right ">
        <div className="contact-list-container" style={{ height: "25rem" }}>
          <p style={{ fontSize: "25px" }} className="col-grey">
            Today
          </p>
          <SeeAllTransactionItem data={"daily"}></SeeAllTransactionItem>
        </div>
        <div className="contact-list-container" style={{ height: "25rem" }}>
          <p style={{ fontSize: "25px" }} className="col-grey">
            Weekly
          </p>
          <SeeAllTransactionItem data={"weekly"}></SeeAllTransactionItem>
        </div>
      </div>
      <NavBar />
      <Footer />
    </div>
  );
};
