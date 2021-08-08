import React from "react";
import { Link } from "react-router-dom";
import Electricity from '../../../src/asset/image/electricity.png'
import Internet from '../../../src/asset/image/internet.png'
import Transportation from '../../../src/asset/image/transportation.png'
import Shopping from '../../../src/asset/image/shopping.png'

const PaymentList = () => {
  return (
    <div className="right">
        <div style={{display: 'flex', justifyContent: "space-between"}}>
            <p className="transfer-primary-text" style={{margin: '20px 0'}}>Choose Your Payment</p>
        </div>
        <Link to='/billing/electricity' style={{ textDecoration: "none" }}>
              <div className="transfer-item-wrapper">
                <img
                  src={Electricity}
                  className="transfer-contact-image"
                  width={"82px"}
                />
                <div className="transer-contact">
                  <p className="transfer-primary-text">Electricity</p>
                  <p className="transfer-secondary-text">Easily pay your electricity billing for both pre-paid and post-paid</p>
                </div>
              </div>
        </Link>
        <Link to='/billing/internet' style={{ textDecoration: "none" }}>
              <div className="transfer-item-wrapper">
                <img
                  src={Internet}
                  className="transfer-contact-image"
                  width={"82px"}
                />
                <div className="transer-contact">
                  <p className="transfer-primary-text">Internet</p>
                  <p className="transfer-secondary-text">Easily pay your Indihome, First Media, Biznet Home, MNC Play, and MyRepublic billing. Hassle free!</p>
                </div>
              </div>
        </Link>
        <Link to='/billing/transport' style={{ textDecoration: "none" }}>
              <div className="transfer-item-wrapper">
                <img
                  src={Transportation}
                  className="transfer-contact-image"
                  width={"82px"}
                />
                <div className="transer-contact">
                  <p className="transfer-primary-text">Transportation</p>
                  <p className="transfer-secondary-text">No need to queue anymore! Pay train, airplane, bus, and car rental tickets just one click away</p>
                </div>
              </div>
        </Link>
        <Link to='/billing/ecommerce' style={{ textDecoration: "none" }}>
              <div className="transfer-item-wrapper">
                <img
                  src={Shopping}
                  className="transfer-contact-image"
                  width={"82px"}
                />
                <div className="transer-contact">
                  <p className="transfer-primary-text">E-Commerce Payments</p>
                  <p className="transfer-secondary-text">Hates transfer fee? Zwallet is here to provide you the best online shopping experience!</p>
                </div>
              </div>
        </Link>
    </div>
  );
};

export default PaymentList
