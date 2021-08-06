import React, { useState } from "react";
import Hero from "../component/Hero";
import "../style/newLogin.css";
import Button from "../component/Button";
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link, Redirect} from 'react-router-dom';

const MailForPassword = () => {
    return (
        <div className="login-container">
            <Hero />
            <div className="login-right">
                <div>
                    <AiFillCheckCircle style={{ color: '#1EC15F', width: '70px', height: '70px' }} />
                    <p className="login-text-box-top">
                        Reset Password
                    </p>
                    <p className="login-text-box-bottom">
                    Zwallet will send a password reset link to that address.
                    </p>
                </div>

                <div>
                    <Link to='/login'>
                    <Button>
                        Back to Login
                    </Button>
                    </Link> 
                </div>
            </div>
        </div>
    );
};

export default MailForPassword;
