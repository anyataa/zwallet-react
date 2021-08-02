import React, { useReducer, useState } from "react";
import Hero from "../component/Hero";
import "../style/newLogin.css";
import "../style/transfer.css";
import Pin from "../component/Pin"
import axios from "axios";
import { urlAPI } from "../asset/urls";
import { Redirect } from "react-router-dom";

const CreatePin = () => {
    const [pinValue, setPinValue] = useState("")
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);


    const create = () => {
        if (localStorage.getItem("userData")) {
            console.log(JSON.parse(localStorage.getItem('userData')).userPin)
            axios.put(urlAPI + `/user/update-pin/${JSON.parse(localStorage.getItem("userData")).userId}`, {pin: pinValue})
            .then(res => {
                console.log(res.data)
                localStorage.setItem('userData', JSON.stringify(res.data))
                forceUpdate();
            })
            .catch(err => console.log(err))
        }
    }
    
    if(JSON.parse(localStorage.getItem('userData')).userPin){
        return <Redirect to='/pinSuccess'/>
    }
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
                    <Pin goTo='/pinsuccess' buttonValue="Confirm" setPinValue={setPinValue} onClick={create}/>
                </div>
            </div>
        </div>
    );
};

export default CreatePin;
