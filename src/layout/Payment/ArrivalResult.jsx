import React from "react";
import { Link } from "react-router-dom";
import CityLink from "../../asset/image/citylink.png";
import Garuda from "../../asset/image/garudaindo.png";
import { IoAirplane } from 'react-icons/io5';
import { GoPrimitiveDot } from 'react-icons/go';

export const ArrivalResult = () => {
  return (
    <div className="right">
      <div className="profile-top-container set-margin-for-dash" style={{ height: "15rem", marginBottom: "4rem", display : 'flex', flexDirection: 'column', color: 'white' }}>
          <h1>Bali / Denpasar (DPS) → Jakarta (JKTA)</h1>
          <br />
          <h2>Sun, Aug 15, 2021  |  1 passengers  |  Economy</h2>
      </div>
      <Link to="/billing/transport/departresult/arrival/summary" style={{ textDecoration: "none" }}>
        <div className="transfer-item-wrapper">
          <img src={CityLink} className="transfer-contact-image" style={{ width: '100px' }} />
          <div className="transer-contact">
            <p className="transfer-primary-text">Citilink</p>
            <p className="transfer-secondary-text">Free Baggage 20kg |  PCR Coupon  |  Rp17 Insurance</p>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'black', justifyContent: 'center', alignItems: 'center'}}>
            <p>14:30</p>
            <p>Bali (DPS)</p>
          </div>
          <div style={{marginLeft: '7vw', marginTop: '1vh', color: 'gray'}}>
          <GoPrimitiveDot /><IoAirplane /><GoPrimitiveDot />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'black', justifyContent: 'center', alignItems: 'center', marginLeft: '10vw'}}>
            <p>15:25</p>
            <p>Jakarta (HLP)</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'black', justifyContent: 'center', alignItems: 'center', marginLeft: '10vw'}}>
            <p>1h 55m</p>
            <p>Direct</p>
          </div >
          <h1 style={{marginLeft: '7vw'}}>Rp 622.500<span style={{color: 'gray', fontSize: '25px'}}>/pax</span></h1>
        </div>
          </div>
        </div>
      </Link>
      <Link to="/billing/transport/departresult/arrival/summary" style={{ textDecoration: "none" }}>
        <div className="transfer-item-wrapper">
          <img src={CityLink} className="transfer-contact-image" style={{ width: '100px' }} />
          <div className="transer-contact">
            <p className="transfer-primary-text">Citilink</p>
            <p className="transfer-secondary-text">Free Baggage 20kg |  PCR Coupon  |  Rp17 Insurance</p>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'black', justifyContent: 'center', alignItems: 'center'}}>
            <p>13:10</p>
            <p>Bali (DPS)</p>
          </div>
          <div style={{marginLeft: '7vw', marginTop: '1vh', color: 'gray'}}>
          <GoPrimitiveDot /><IoAirplane /><GoPrimitiveDot />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'black', justifyContent: 'center', alignItems: 'center', marginLeft: '10vw'}}>
            <p>14:10</p>
            <p>Jakarta (CGK)</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'black', justifyContent: 'center', alignItems: 'center', marginLeft: '10vw'}}>
            <p>2h 0m</p>
            <p>Direct</p>
          </div >
          <h1 style={{marginLeft: '7vw'}}>Rp 783.700<span style={{color: 'gray', fontSize: '25px'}}>/pax</span></h1>
        </div>
          </div>
        </div>
      </Link>
      <Link to="/billing/transport/departresult/arrival/summary" style={{ textDecoration: "none" }}>
        <div className="transfer-item-wrapper">
          <img src={Garuda} className="transfer-contact-image" style={{ width: '100px' }} />
          <div className="transer-contact">
            <p className="transfer-primary-text">Garuda Indonesia</p>
            <p className="transfer-secondary-text">PCR Coupon  |  Rp17 Insurance | Free Protection</p>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'black', justifyContent: 'center', alignItems: 'center'}}>
            <p>18:40</p>
            <p>Bali (DPS)</p>
          </div>
          <div style={{marginLeft: '7vw', marginTop: '1vh', color: 'gray'}}>
          <GoPrimitiveDot /><IoAirplane /><GoPrimitiveDot />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'black', justifyContent: 'center', alignItems: 'center', marginLeft: '10vw'}}>
            <p>19:35</p>
            <p>Jakarta (CGK)</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'black', justifyContent: 'center', alignItems: 'center', marginLeft: '10vw'}}>
            <p>1h 55m</p>
            <p>Direct</p>
          </div >
          <h1 style={{marginLeft: '7vw'}}>Rp 1.081.800<span style={{color: 'gray', fontSize: '25px'}}>/pax</span></h1>
        </div>
          </div>
        </div>
      </Link>
      <Link to="/billing/transport/departresult/arrival/summary" style={{ textDecoration: "none" }}>
        <div className="transfer-item-wrapper">
          <img src={CityLink} className="transfer-contact-image" style={{ width: '100px' }} />
          <div className="transer-contact">
            <p className="transfer-primary-text">Citilink</p>
            <p className="transfer-secondary-text">Free Baggage 20kg |  PCR Coupon  |  Rp17 Insurance</p>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'black', justifyContent: 'center', alignItems: 'center'}}>
            <p>11:20</p>
            <p>Bali (DPS)</p>
          </div>
          <div style={{marginLeft: '7vw', marginTop: '1vh', color: 'gray'}}>
          <GoPrimitiveDot /><IoAirplane /><GoPrimitiveDot />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'black', justifyContent: 'center', alignItems: 'center', marginLeft: '10vw'}}>
            <p>12:20</p>
            <p>Jakarta (CGK)</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'black', justifyContent: 'center', alignItems: 'center', marginLeft: '10vw'}}>
            <p>2h 0m</p>
            <p>Direct</p>
          </div >
          <h1 style={{marginLeft: '7vw'}}>Rp 882.700<span style={{color: 'gray', fontSize: '25px'}}>/pax</span></h1>
        </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
