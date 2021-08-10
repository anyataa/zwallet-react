import React, { useEffect, useState } from "react";
import "../style/transfer.css";
import "../style/navBar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { urlAPI } from "../asset/urls";
import { useDispatch, useSelector } from "react-redux";
import { onTransfer } from "../actions";

export const InputNominalTransfer = (props) => {
  const [data, setData] = useState([]);
  const [Balance, setBalance] = useState(0);
  const [nominalTransfer, setNominalTransfer] = useState();
  const [noteTransfer, setNoteTransfer] = useState("");

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    setBalance(user.accountBalance);
    getFriendData();
  }, []);

  const getFriendData = () => {
    axios
      .get(urlAPI + `/user/getfriend/${props.match.params.id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="right">
      <p className="transfer-primary-text">Transfer Money</p>
      <div className="transfer-item-wrapper">
        <img
          src={data.userImage ? urlAPI + `/files/download/${data.userImage}` : "https://i.ibb.co/FHLx6h9/default.png"}
          alt=""
          className="transfer-contact-image"
          width="70px"
        />
        <div className="transer-contact">
          <p className="transfer-primary-text">
            {data.userName ? data.userName : "Error"}
          </p>
          <p className="transfer-secondary-text">
            {data.phoneNumber ? data.phoneNumber : "Error"}
          </p>
        </div>
      </div>

      <div className="transfer-input-amount-wrapper">
        <p className="transfer-secondary-text" style={{ marginBottom: "10vh" }}>
          Type the amount you want to transfer and then
          <br />
          press continue to the next steps.
        </p>
        <div
          className="transfer-input-amount-wrapper2"
          style={{ marginBottom: "5vh" }}
        >
          <input
            onChange={(e) => setNominalTransfer(e.target.value)}
            value={nominalTransfer}
            type="text"
            id="transfer-input-amount"
            placeholder="0.00"
            style={{ marginBottom: "5vh" }}
          />
          {Balance - nominalTransfer < 0 ? (
            <p className="col-red">Amount exceeds your balance</p>
          ) : (
            <p></p>
          )}
          <p className="transfer-primary-text">
            {Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(
              nominalTransfer ? Balance - nominalTransfer : Balance
            )}{" "}
            Available
          </p>
          {/* Check if amount exceeding the balance */}
          <div
            className="transfer-input-notes-wrapper"
            style={{ marginTop: "5vh" }}
          >
            <img
              src="../assets/images/pen.svg"
              alt=""
              id="transfer-input-amount-icon"
            />
            <input
              type="text"
              id="transfer-input-notes"
              placeholder="Add some notes"
              value={noteTransfer}
              onChange={(e) => setNoteTransfer(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="set-transfer-button-confirmation">
        <Link to={`/transfer`} style={{ textDecoration: "none" }}>
          <input type="button" value="Back" className="transfer-btn" />
        </Link>
        <Link to={`/transfer/${props.match.params.id}/confirmation`}>
          <input
            type="button"
            value="Continue"
            className="transfer-btn"
            onClick={() =>
              dispatch(
                onTransfer({
                  id: props.match.params.id,
                  name: data.userName,
                  phone: data.phoneNumber,
                  nominalTransfer,
                  noteTransfer,
                  balance: Balance - nominalTransfer,
                })
              )
            }
            disabled={
              nominalTransfer && noteTransfer && Balance - nominalTransfer >= 0
                ? false
                : true
            }
          />
        </Link>
      </div>
    </div>
  );
};
