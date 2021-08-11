import React, { useState } from "react";
import Hero from "../component/Hero";
import "../style/newLogin.css";
import "../style/transfer.css";
import Pin from "../component/Pin"
import axios from "axios";
import { urlAPI } from "../asset/urls";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLoginAction } from "../actions";

const CreatePin = () => {
    const [pinValue, setPinValue] = useState("")

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    const create = () => {
        if (user.userId) {
            axios.put(urlAPI + `/user/update-pin/${user.userId}`, {pin: pinValue})
            .then(res => {
                dispatch(onLoginAction(res.data))
            })
            .catch(err => console.log(err))
        }
    }
    
    if(user.userPin !== null ) {
        return <Redirect to='/pinSuccess'/>
    }
    return (
        <div className="login-container">
            {console.log(user.userPin)}
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
                    <Pin goTo='/pinsuccess' buttonValue="Confirm" setPinValue={setPinValue} pinValue={pinValue} onClick={create}/>
                </div>
            </div>
        </div>
    );
};

export default CreatePin;
