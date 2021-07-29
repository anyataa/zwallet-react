import React from "react";
import Hero from "../component/Hero";
import "../style/newLogin.css";
import Button from "../component/Button";
import { AiFillCheckCircle } from 'react-icons/ai';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const PinSuccess = () => {

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
                    <Link to='/dashboard'>
                    <Button>
                        Login Now
                    </Button>
                    </Link> 
                    
                </div>
            </div>
        </div>
    );
};

export default PinSuccess;
