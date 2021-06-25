import React from 'react';
import "../../../style/landingPage.css";

const Footer = () => {
    return (
        <div className="landing-footer">
        <div className="landing-footer-top">
            <p className="footer-title">Zwallet</p>
            <p className="footer-subtitle">Simplify financial needs and saving much time in banking needs with one
                single app.</p>
        </div>
        <div className="landing-footer-bottom">
            <p className="footer-copyright">2020 Zwallet. All right reserved.</p>
            <div className="footer-bottom-right">
                <p className="footer-text">+62 5637 8882 9901</p>
                <p className="footer-text">contact@zwallet.com</p>
            </div>
        </div>
    </div>
    )
}

export default Footer
