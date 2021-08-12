import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Tokopedia from "../../asset/image/tokopedia.png";
import { urlAPI } from "../../asset/urls";
import { inRupiah } from "../../global";

const EcommerceBill = () => {
  const nominalTransaksi = 48000;
  const nominalAdmin = 2500;
  const transfer = useSelector((state) => state.transfer);
  const user = useSelector((state) => state.user);

  const body = {
    transactionAmount: nominalTransaksi + nominalAdmin,
    transactionNotes: "E-Commerce",
    toAccountId: user.accountId,
  };
  const onPost = () => {
    axios
      .post(`${urlAPI}/transaction/payments/Tokopedia`, body)
      .then((res) => {
        if (res.data.message.includes("Success")) {
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="right">
      <div className="transfer-right-top">
        <img src={Tokopedia} style={{ height: "50px", width: "180px" }} />
        <p className="transfer-primary-text"></p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Customer ID</p>
        <p className="transfer-primary-text">{transfer.noteTransfer}</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Customer Name</p>
        <p className="transfer-primary-text">{user.userName}</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Billing Amount</p>
        <p className="transfer-primary-text">{inRupiah(nominalTransaksi)}</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Admin</p>
        <p className="transfer-primary-text">{inRupiah(nominalAdmin)}</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Total</p>
        <p className="transfer-primary-text">
          {inRupiah(nominalAdmin + nominalTransaksi)}
        </p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Balance</p>
        <p className="transfer-primary-text">
          {" "}
          {inRupiah(user.accountBalance)}
        </p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Remaining Balance</p>
        <p className="transfer-primary-text">
          {" "}
          {inRupiah(user.accountBalance - (nominalTransaksi + nominalAdmin))}
        </p>
        {user.accountBalance - (nominalTransaksi + nominalAdmin) >= 0 ? null : (
          <p className="col-red">
            &nbsp; &nbsp; Sorry, Your Balance is not sufficient. Please top up
            first
          </p>
        )}
      </div>
      <div className="set-transfer-button-confirmation">
        <Link to="/billing/ecommerce" style={{ textDecoration: "none" }}>
          <input type="button" value="Back" className="transfer-btn" />
        </Link>
        <Link>
          <input
            disabled={
              user.accountBalance - (nominalTransaksi + nominalAdmin) >= 0
                ? false
                : true
            }
            onClick={() => onPost()}
            type="button"
            value="Pay"
            className="transfer-btn"
          />
        </Link>
      </div>
    </div>
  );
};

export default EcommerceBill;
