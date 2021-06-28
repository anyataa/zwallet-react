import React from 'react';
import "../../../style/landingPage.css";
import Airbnb from '../../../asset/SVG/air-bnb.svg'
import Canon from '../../../asset/SVG/canon.svg'
import Dell from '../../../asset/SVG/dell.svg'
import Microsoft from '../../../asset/SVG/microsoft.svg'
import Dropbox from '../../../asset/SVG/dropbox.svg'
import Hnm from '../../../asset/SVG/hnm.svg'

const Partner = () => {
    return (
        <div>
            <div className="landing-partner">
            <div className="left-partner">
                <p className="partner-title">100+ <span>Trusted</span> Partners.</p>
                <p className="partner-subtitle">We have reached global level and have 100+ brand partners around the globe.
                </p>
            </div>
            <div className="right-partner" style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display:'flex', flexDirection: 'row'}}>
                    <img src={Airbnb} alt="Airbnb"/>
                    <img src={Canon} alt="Canon"/>
                    <img src={Dell} alt="Dell"/>
                </div>
                <div style={{display:'flex', flexDirection: 'row'}}>
                    <img src={Microsoft} alt="Microsoft"/>
                    <img src={Dropbox} alt="Dropbox"/>
                    <img src={Hnm} alt="Hnm"/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Partner
