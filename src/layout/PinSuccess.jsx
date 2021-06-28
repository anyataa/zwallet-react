import React from "react";
import Hero from "../component/Hero";
import "../style/newLogin.css";
import Button from "../component/Button";
import { AiFillCheckCircle } from 'react-icons/ai';

const ResetPassword = () => {

    return (
        <div className="login-container">
            <Hero />
            <div className="login-right">
                <div>
                    <AiFillCheckCircle style={{ color: '#1EC15F', width: '70px', height: '70px' }} />
                    <p className="login-text-box-top">
                        Your PIN Was Successfully Created
                    </p>
                    <p className="login-text-box-bottom">
                        Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!
                    </p>
                </div>

                <div>
                    <Button>
                        Login Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
