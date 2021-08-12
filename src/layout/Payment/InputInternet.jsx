import React, { useEffect, useState } from "react";
import "../../style/transfer.css";
import "../../style/navBar.css";
import { Link } from "react-router-dom";
import { formatRupiah } from "../../global";
import Internet from "../../../src/asset/image/internet.png";
import { useDispatch, useSelector } from "react-redux";
import { onTransfer } from "../../actions";

const InputInternet = () => {
  const [noteTransfer, setNoteTransfer] = useState("");
  const transfer = useSelector((state) => state.transfer);
  const dispatch = useDispatch();
  return (
    <div className="right">
      <p className="transfer-primary-text">Payment</p>
      <div className="transfer-item-wrapper">
        <img src={Internet} className="transfer-contact-image" width="85px" />
        <div className="transer-contact">
          <p className="transfer-primary-text">Internet</p>
          <p className="transfer-secondary-text">Internet & Cable TV</p>
        </div>
      </div>

      <div className="transfer-input-amount-wrapper">
        <p className="transfer-secondary-text" style={{ marginBottom: "10vh" }}>
          Input your Customer ID and then
          <br />
          press check bill to the next steps.
        </p>
        <div
          className="form-group"
          style={{
            color: "#6379F4",
            fontSize: "24px",
            marginBottom: "5vh",
            alignItems: "center",
            fontFamily: "Nunito Sans Regular",
            display: "flex",
            flexDirection: "column",
            fontWeight: "bold",
          }}
        >
          <label for="sel1">Select Provider : </label>
          <select
            className="form-control"
            style={{ color: "#6379F4", fontSize: "24px", border: "none" }}
          >
            <option>Indihome</option>
            <option>First Media</option>
            <option>Biznet Home</option>
            <option>MNC Play</option>
            <option>MyRepublic</option>
          </select>
        </div>
        <div
          className="transfer-input-amount-wrapper2"
          style={{ marginBottom: "5vh" }}
        >
          <input
            type="text"
            id="transfer-input-notes"
            placeholder="            Your Customer ID"
            style={{ fontSize: "22px", marginBottom: "0vh" }}
            value={noteTransfer}
            onChange={(e) => setNoteTransfer(e.target.value)}
          />
        </div>
      </div>
      <div className="set-transfer-button-confirmation">
        <Link to="/billing" style={{ textDecoration: "none" }}>
          <input type="button" value="Back" className="transfer-btn" />
        </Link>
        <Link to="/billing/internet/indihome">
          <input
            type="button"
            value="Check Bill"
            className="transfer-btn"
            disabled={noteTransfer != "" ? false : true}
            onClick={() =>
              dispatch(
                onTransfer({
                  ...transfer,
                  id: "Indihome",
                  name: "Indihome",
                  phone: "10291891",
                  noteTransfer,
                })
              )
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default InputInternet;
