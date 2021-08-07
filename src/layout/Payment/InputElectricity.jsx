import React, { useEffect, useState } from "react";
import "../../style/transfer.css";
import "../../style/navBar.css";
import { Link } from "react-router-dom";
import { formatRupiah } from "../../global";
import Electricity from '../../../src/asset/image/electricity.png'

const InputElectricity = () => {

  return (
    <div className="right">
      <p className="transfer-primary-text">Payment</p>
      <div className="transfer-item-wrapper">
        <img
          src={Electricity}
          className="transfer-contact-image"
          width="85px"/>
        <div className="transer-contact">
          <p className="transfer-primary-text">Electricity</p>
          <p className="transfer-secondary-text">PLN</p>
        </div>
      </div>

      <div className="transfer-input-amount-wrapper">
        <p className="transfer-secondary-text" style={{ marginBottom: '10vh'}}>
          Input your Meter No. / Customer ID and then
          <br />
          press check bill to the next steps.
        </p>
        <div className="form-group" style={{ color: '#6379F4', fontSize: '24px', marginBottom: '5vh', alignItems: 'center', fontFamily: 'Nunito Sans Regular', display: 'flex', flexDirection: 'column', fontWeight: 'bold'}}>
            <label for="sel1">Choose : </label>
            <select className="form-control" style={{ color: '#6379F4', fontSize: '24px', border: 'none'}}>
                <option>PLN Postpaid</option>
                <option>PLN Prepaid</option>
            </select>
        </div>
        <div className="transfer-input-amount-wrapper2" style={{ marginBottom: '5vh'}}>
          <input type="text" id="transfer-input-notes" placeholder="Your Meter No. / Customer ID" style={{fontSize: '22px', marginBottom: '0vh'}} />
        </div>
      </div>
      <div className="set-transfer-button-confirmation">
        <Link to='/billing' style={{ textDecoration: "none" }} >
          <input type="button" value="Back" className="transfer-btn" />
        </Link>
        <Link to='/billing/electricity/pln'>
          <input type="button" value="Check Bill" className="transfer-btn"/>
        </Link>
      </div>
    </div>
  );
};

export default InputElectricity
