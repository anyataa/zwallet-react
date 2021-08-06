import axios from "axios";
import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { urlAPI } from "../asset/urls";
import { setTransactionData } from "../global";
import { InputNominalTransfer } from "./InputNominalTransfer";

export const TransferConfirmation = (props) => {
  const [data, setData] = useState([]);
  const [transferData, setTransferData] = useState([]);
  const [accountData, setAccountData] = useState({});

  useEffect(() => {
    setTransferData(JSON.parse(localStorage.getItem("transfer-data")));
    getFriendData();
    setAccountData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  const onTransfer = () => {
    if (transferData && accountData) {
      var body = {
        transactionAmount: transferData.nominalTransfer,
        transactionNotes: transferData.noteTransfer,
        fromAccountId: accountData.accountId,
        toUserId: transferData.id,
      };
      axios
        .post(urlAPI + "/transaction/transfer", body)
        .then((res) => {
          localStorage.setItem(
            "userData",
            JSON.stringify({
              ...JSON.parse(localStorage.getItem("userData")),
              accountBalance: res.data.data.fromAccountBalance,
            })
          );
          setTransactionData(
            JSON.parse(localStorage.getItem("userData")).accountId
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log("transfer in", transferData.id);
  };

  const getFriendData = () => {
    axios
      .get(urlAPI + `/user/getfriend/${props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="right">
      {/* {
        console.log(accountData)
      } */}
      <div>
        <p className="transfer-primary-text">Transfer To</p>
        <div className="transfer-item-wrapper">
          <img
            src={"https://i.ibb.co/FHLx6h9/default.png"}
            alt=""
            style={{ width: "70px", height: "70px" }}
            className="transfer-contact-image"
          />
          <div className="transfer-contact">
            <p className="transfer-primary-text">
              {data.userName ? data.userName : "Error"}
            </p>
            <p className="transfer-secondary-text">
              {data.phoneNumber ? data.phoneNumber : "Error"}
            </p>
          </div>
        </div>
        <p className="transfer-primary-text">Details</p>
        <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
          <p className="transfer-secondary-text">Amount</p>
          <p className="transfer-primary-text">
            {Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(transferData ? transferData.nominalTransfer : 0)}
          </p>
        </div>
        <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
          <p className="transfer-secondary-text">Balance Left</p>
          <p className="transfer-primary-text">
            {Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(
              accountData.accountBalance
                ? accountData.accountBalance - transferData.nominalTransfer
                : 0
            )}
          </p>
        </div>
        <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
          <p className="transfer-secondary-text">Date & Time</p>
          <p className="transfer-primary-text">
            {Date().toLocaleString().slice(0, 21)}
          </p>
        </div>
        <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
          <p className="transfer-secondary-text">Notes</p>
          <p className="transfer-primary-text">{transferData.noteTransfer}</p>
        </div>
        <div className="set-transfer-button-confirmation">
          <Link
            to={`/transfer/${data.userId}`}
            style={{ textDecoration: "none" }}
          >
            <input type="button" value="Back" className="transfer-btn" />
          </Link>
          <input
            onClick={props.setModalToggle}
            type="button"
            value="Continue"
            className="transfer-btn"
          />
        </div>
      </div>
    </div>
  );
};
