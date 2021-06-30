import React from "react";
import Hero from "../component/Hero";
import "../style/newLogin.css";
import "../style/transfer.css";
import Pin from "../component/Pin"

const ResetPassword = () => {

    return (
        <div className="login-container">
            <Hero />
            <div className="login-right">
                <div>
                    <p className="login-text-box-top">
                        Secure Your Account, Your Wallet,
                        <br />and Your Data With 6 Digits PIN
                        <br />That You Created Yourself.
                    </p>
                    <p className="login-text-box-bottom">
                        Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.
                    </p>
                </div>

                <div>
                    <Pin goTo='/pinsuccess' buttonValue="Confirm" />
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
