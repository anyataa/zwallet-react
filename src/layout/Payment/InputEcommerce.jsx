import React, { useEffect, useState } from "react";
import "../../style/transfer.css";
import "../../style/navBar.css";
import { Link } from "react-router-dom";
import { formatRupiah } from "../../global";
import Internet from '../../../src/asset/image/internet.png'
import Shopping from '../../../src/asset/image/shopping.png'

const InputEcommerce = () => {

  return (
    <div className="right">
      <p className="transfer-primary-text">Payment</p>
      <div className="transfer-item-wrapper">
        <img
          src={Shopping}
          className="transfer-contact-image"
          width="85px"/>
        <div className="transer-contact">
          <p className="transfer-primary-text">E-Commerce</p>
          <p className="transfer-secondary-text">Your Favorite E-Commerce</p>
        </div>
      </div>

      <div className="transfer-input-amount-wrapper">
        <p className="transfer-secondary-text" style={{ marginBottom: '10vh'}}>
          Input your Billing ID and then
          <br />
          press check bill to the next steps.
        </p>
        <div className="form-group" style={{ color: '#6379F4', fontSize: '24px', marginBottom: '5vh', alignItems: 'center', fontFamily: 'Nunito Sans Regular', display: 'flex', flexDirection: 'column', fontWeight: 'bold'}}>
            <label for="sel1">Select Platform : </label>
            <select className="form-control" style={{ color: '#6379F4', fontSize: '24px', border: 'none'}}>
                <option>Tokopedia</option>
                <option>Shopee</option>
                <option>Bukalapak</option>
                <option>JD.ID</option>
                <option>Lazada</option>
            </select>
        </div>
        <div className="transfer-input-amount-wrapper2" style={{ marginBottom: '5vh'}}>
          <input type="text" id="transfer-input-notes" placeholder="            Your Billing ID" style={{fontSize: '22px', marginBottom: '0vh'}} />
        </div>
      </div>
      <div className="set-transfer-button-confirmation">
        <Link to='/billing' style={{ textDecoration: "none" }} >
          <input type="button" value="Back" className="transfer-btn" />
        </Link>
        <Link to='/billing/ecommerce/tokopedia'>
          <input type="button" value="Check Bill" className="transfer-btn"/>
        </Link>
      </div>
    </div>
  );
};

export default InputEcommerce
