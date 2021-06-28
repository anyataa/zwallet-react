import React, { useState } from "react";
import Hero from "../component/Hero";
import "../style/newLogin.css";
import "../style/transfer.css";
import Button from "../component/Button";

const ResetPassword = () => {
    const [isDisabled, setIsDisabled] = useState(true);

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

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <input
                        type="number"
                        className="transfer-input-pin"
                    />
                    <input
                        type="number"
                        className="transfer-input-pin"
                    />
                    <input
                        type="number"
                        className="transfer-input-pin"
                    />
                    <input
                        type="number"
                        className="transfer-input-pin"
                    />
                    <input
                        type="number"
                        className="transfer-input-pin"
                    />
                    <input
                        type="number"
                        className="transfer-input-pin"
                    />
                </div>

                <div>
                    <Button disabled={isDisabled}>
                        Confirm
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
