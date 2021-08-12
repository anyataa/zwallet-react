import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PLN from "../../asset/image/pln.jpg";
import { urlAPI } from "../../asset/urls";
import { inRupiah } from "../../global";

export const ElectricityBill = ({ setDisplay, display }, props) => {
  const nominalTransaksi = 102500;
  const transfer = useSelector((state) => state.transfer);
  const user = useSelector((state) => state.user);
  const body = {
    transactionAmount: nominalTransaksi,
    transactionNotes: "Tagihan Listrik",
    toAccountId: user.accountId,
  };
  const onPost = () => {
    axios
      .post(`${urlAPI}/transaction/payments/PLN`, body)
      .then((res) => {
        if (res.data.message.includes("Success")) {
          console.log("success", res);
          setDisplay();
          console.log(display);
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
      {console.log(props, display)}
      <div className="transfer-right-top">
        <img src={PLN} style={{ height: "50px", width: "100px" }} />
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
        <p className="transfer-primary-text">Rp. 100.000</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Admin</p>
        <p className="transfer-primary-text">Rp. 2.500</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Total</p>
        <p className="transfer-primary-text">{inRupiah(nominalTransaksi)}</p>
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
          {inRupiah(user.accountBalance - nominalTransaksi)}
        </p>
        {user.accountBalance - nominalTransaksi >= 0 ? null : (
          <p className="col-red">
            &nbsp; &nbsp; Sorry, Your Balance is not sufficient. Please top up
            first
          </p>
        )}
      </div>

      <div className="set-transfer-button-confirmation">
        <Link to="/billing/electricity" style={{ textDecoration: "none" }}>
          <input type="button" value="Back" className="transfer-btn" />
        </Link>
        <Link>
          <input
            disabled={
              user.accountBalance - nominalTransaksi >= 0 ? false : true
            }
            type="button"
            value="Pay"
            onClick={() => onPost()}
            className="transfer-btn"
          />
        </Link>
      </div>
    </div>
  );
};

// export default ElectricityBill;
