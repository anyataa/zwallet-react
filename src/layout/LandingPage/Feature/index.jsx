import React from 'react';
import "../../../style/landingPage.css";
import Smartphone from '../../../asset/SVG/smartphone.svg'

const Feature = () => {
    return (
        <div className="landing-feature">
            <div className="left-feature">
                <img src={Smartphone} alt="Phone" />;
            </div>
            <div className="right-feature">
                <div>
                    <p className="feature-title">All The <span>Great</span> Zwallet Features.</p>
                </div>
            <div className="card-feature">
                <div className="card-container">
                    <p className="card-title-feature">1. <span>Small Fee</span></p>
                    <p className="card-desc-feature">We only charge 5% of every success transaction done in Zwallet app.</p>
                </div>
            </div>
            <div className="card-feature">
                <div className="card-container">
                    <p className="card-title-feature">2. <span>Data Secured</span></p>
                    <p className="card-desc-feature">All your data is secured properly in our system and it’s encrypted.</p>
                </div>
            </div>
            <div className="card-feature">
                <div className="card-container">
                    <p className="card-title-feature">3. <span>User Friendly</span></p>
                    <p className="card-desc-feature">Zwallet come up with modern and sleek design and not complicated.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Feature
