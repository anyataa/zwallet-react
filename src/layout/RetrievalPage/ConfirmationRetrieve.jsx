import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { onLoginAction, updateAccountBalance } from "../../actions";
import { urlAPI, urlFile } from "../../asset/urls";
import { setTransactionData } from "../../global";

export const RetrieveConfirmation = ({ setDisplay, display }, props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch(updateAccountBalance);
  const [data, setData] = useState([]);
  const [transferData, setTransferData] = useState([]);
  const [retrieveData, setRetrieveData] = useState(null);

  useEffect(() => {
    setTransferData(JSON.parse(localStorage.getItem("retrieve-data")));
    setRetrieveData(JSON.parse(localStorage.getItem("retrieve-data")));
  }, []);

  const onRetrieve = () => {
    var body = {
      username: retrieveData.bankName,
      transactionAmount: retrieveData.amount,
      transactionNotes: `Retrieve : ${retrieveData.bankNumber}`,
      toAccountId: user.accountId,
    };
    axios
      .post(urlAPI + "/zwallet/retrieve/bank", body)
      .then((res) => {
        if (res.data.message.includes("Success")) {
          console.log(res.data.data);
          let resBalance = res.data.data.senderBalance;
          dispatch(
            onLoginAction({
              ...user,
              accountBalance: resBalance,
            })
          );
          setTransactionData(user.accountId);
          setDisplay();
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
      <div>
        <p className="transfer-primary-text">Retrieve To</p>
        <div className="transfer-item-wrapper">
          <img
            src={
              retrieveData
                ? `${urlFile}/${retrieveData.bankName}.png`
                : "https://i.ibb.co/FHLx6h9/default.png"
            }
            alt=""
            className="transfer-contact-image"
          />
          <div className="transfer-contact">
            <p className="transfer-primary-text">
              {retrieveData ? retrieveData.bankName : "Bank"}
            </p>
            <p className="transfer-secondary-text">
              {retrieveData ? retrieveData.bankNumber : "082222222222"}
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
              minimumFractionDigits: 0,
            }).format(retrieveData ? transferData.amount : 0)}
          </p>
        </div>
        <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
          <p className="transfer-secondary-text">Balance Left</p>
          <p className="transfer-primary-text">
            {Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(retrieveData ? retrieveData.balance : 0)}
          </p>
        </div>
        <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
          <p className="transfer-secondary-text">Date & Time</p>
          <p className="transfer-primary-text">
            {Date().toLocaleString().slice(0, 21)}
          </p>
        </div>

        <div className="set-transfer-button-confirmation">
          <Link
            to={`/retrieval/${retrieveData ? retrieveData.bankName : "error"}`}
            style={{ textDecoration: "none" }}
          >
            <input type="button" value="Back" className="transfer-btn" />
          </Link>

          <input
            onClick={onRetrieve}
            type="button"
            value="Continue"
            className="transfer-btn"
          />
        </div>
      </div>
    </div>
  );
};
