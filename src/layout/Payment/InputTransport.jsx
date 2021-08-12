import React, { useEffect, useState } from "react";
import "../../style/transfer.css";
import "../../style/navBar.css";
import { Link } from "react-router-dom";
import { formatRupiah } from "../../global";
import Transportation from '../../../src/asset/image/transportation.png'
import { MdFlight, MdTrain, MdDirectionsCar } from "react-icons/md";
import { BiBusSchool } from "react-icons/bi";

const InputTransport = () => {

  return (
    <div className="right">
      <p className="transfer-primary-text">Payment</p>
      <div className="transfer-item-wrapper">
        <img
          src={Transportation}
          className="transfer-contact-image"
          width="85px"/>
        <div className="transer-contact">
          <p className="transfer-primary-text">Transportation</p>
          <p className="transfer-secondary-text">Public transportation</p>
        </div>
      </div>

      <div className="transfer-input-amount-wrapper">
        <p className="transfer-secondary-text">
          Choose your preference and then
          <br />
          press search to the next steps.
        </p>
        <div className="form-group" style={{ color: '#6379F4', fontSize: '24px', fontFamily: 'Nunito Sans Regular', fontWeight: 'bold', marginTop: '3vh'}}>
            <p><MdFlight/> <MdTrain/><BiBusSchool/><MdDirectionsCar/></p>
            <label for="sel1">Choose : </label>
            <select className="form-control" style={{ color: '#6379F4', fontSize: '24px', border: 'none'}}>
                <option>Flight</option>
                <option>Train</option>
                <option>Bus & Shuttle</option>
                <option>Car Rental</option>
            </select>
        </div>
        <div className="payment-wrapper" style={{ marginBottom: '3vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <div className="form-group" style={{ color: '#6379F4', fontSize: '24px', marginBottom: '3vh', fontFamily: 'Nunito Sans Regular', display: 'flex', flexDirection: 'row', fontWeight: 'bold'}}>
            <label for="sel1">From :</label>
            <select className="form-control" style={{ color: '#6379F4', fontSize: '24px', border: 'none'}}>
                <option>Jakarta</option>
                <option>Bandung</option>
                <option>Semarang</option>
                <option>Surabaya</option>
                <option>Yogyakarta</option>
                <option>Bali</option>
            </select>
        </div>
        <div className="form-group" style={{ color: '#6379F4', fontSize: '24px', marginBottom: '3vh', fontFamily: 'Nunito Sans Regular', display: 'flex', flexDirection: 'row', fontWeight: 'bold', marginLeft: '20px'}}>
            <label for="sel1">To :</label>
            <select className="form-control" style={{ color: '#6379F4', fontSize: '24px', border: 'none'}}>
                <option>Jakarta</option>
                <option>Bandung</option>
                <option>Semarang</option>
                <option>Surabaya</option>
                <option>Yogyakarta</option>
                <option>Bali</option>
            </select>
        </div>
        </div>
        <div className="payment-wrapper" style={{ marginBottom: '3vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <div className="form-group" style={{ color: '#6379F4', fontSize: '24px', marginBottom: '3vh', fontFamily: 'Nunito Sans Regular', display: 'flex', flexDirection: 'row', fontWeight: 'bold'}}>
            <label for="sel1">Departure Date :</label>
            <input type='date' style={{ color: '#6379F4', fontSize: '24px', border: 'none'}}/>
        </div>
        <div className="form-group" style={{ color: '#6379F4', fontSize: '24px', marginBottom: '3vh', fontFamily: 'Nunito Sans Regular', display: 'flex', flexDirection: 'row', fontWeight: 'bold'}}>
            <label for="sel1">Return Date :</label>
            <input type='date' style={{ color: '#6379F4', fontSize: '24px', border: 'none'}}/>
        </div>
    </div>
    <div className="payment-wrapper" style={{ marginBottom: '3vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
    <div className="form-group" style={{ color: '#6379F4', fontSize: '24px', fontFamily: 'Nunito Sans Regular', display: 'flex', flexDirection: 'row', fontWeight: 'bold', marginLeft: '20px'}}>
            <label for="sel1">Passengers :</label>
            <select className="form-control" style={{ color: '#6379F4', fontSize: '24px', border: 'none'}}>
                <option>Adult</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <select className="form-control" style={{ color: '#6379F4', fontSize: '24px', border: 'none'}}>
                <option>Child</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <select className="form-control" style={{ color: '#6379F4', fontSize: '24px', border: 'none'}}>
                <option>Infant</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    </div>
      </div>
      <div className="set-transfer-button-confirmation">
        <Link to='/billing' style={{ textDecoration: "none" }} >
          <input type="button" value="Back" className="transfer-btn" />
        </Link>
        <Link to='/billing/transport/departresult'>
          <input type="button" value="Search" className="transfer-btn"/>
        </Link>
      </div>
    </div>
  );
};

export default InputTransport
