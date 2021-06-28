import React from 'react';
import "../../../style/landingPage.css";
import { GrPhone } from 'react-icons/gr'
import { FiLock } from 'react-icons/fi'
import { BsDownload } from 'react-icons/bs'

const About = () => {
    return (
        <div className="landing-about">
            <div className="landing-about-top">
                <p className="about-title">About <span>The Application.</span></p>
                <p className="about-subtitle">We have some great features from the application and it’s totally free to use
                    by all users around the world.</p>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div style={{ width: '60px', height: '60px', borderRadius: '30px', background: 'rgba(71, 58, 209, 0.1)', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
                        <GrPhone size={30} style={{paddingTop: '25%', paddingLeft: '25%'}} /></div>
                    <p className="card-title-about">24/7 Support</p>
                    <p className="card-desc-about">We have 24/7 contact support so you can contact us whenever you want
                        and we will respond it.</p>
                </div>
                <div className="card">
                    <div style={{ width: '60px', height: '60px', borderRadius: '30px', background: 'rgba(71, 58, 209, 0.1)', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
                        <FiLock size={30} style={{paddingTop: '25%', paddingLeft: '25%'}} /></div>
                    <p className="card-title-about">Data Privacy</p>
                    <p className="card-desc-about">We make sure your data is safe in our database and we will encrypt
                        any data you submitted to us.</p>
                </div>
                <div className="card">
                    <div style={{ width: '60px', height: '60px', borderRadius: '30px', background: 'rgba(71, 58, 209, 0.1)', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
                        <BsDownload size={30} style={{paddingTop: '25%', paddingLeft: '25%'}} /></div>
                    <p className="card-title-about">Easy Download</p>
                    <p className="card-desc-about">Zwallet is 100% totally free to use it’s now available on Google Play
                        Store and App Store.</p>
                </div>
            </div>
        </div>
    )
}

export default About

