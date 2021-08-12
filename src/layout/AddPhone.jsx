import React, { useState } from 'react'
import "../style/dashboard.css"
import "../style/global.css"
import "../style/navBar.css"
import "../style/Font/style.css"
import InputAuth from "../component/InputAuth";
import Button from "../component/Button";
import axios from 'axios'
import { urlAPI } from '../asset/urls'
import { useSelector } from 'react-redux'

const AddPhone = ({setDisplay}) => {
    const [phone, setPhone] = useState();
    const [errorMsg, setErrorMsg] = useState("");


    const [isDisabled, setIsDisabled] = useState(true);

    const user = useSelector(state => state.user)

    const addPhone = () => {
        if (user.userId) {
            if(phone.length > 9 && phone.length < 14) {
                var body = {
                    phoneNumber: 0 + phone,
                    userId: user.userId
                }
                axios.post(urlAPI + '/phone/add', body)
                .then(res => {
                    setDisplay()
                })
                .catch(err => console.log(err))
            }else{
                setErrorMsg("Phone number must be between 10 to 13 digits.")
            }
        }
    }

    const buttonHandler = () => {
        if (phone) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
        console.log(isDisabled);
    };

    return (
            <div className="right-change-password">
                <div className="personal-information-top-container">
                    <div className="set-to-left">
                        <h1 className="col-dark-grey">Add Phone Number</h1>
                        <p className="col-grey">
                            Add at least one phone number for the transfer ID so you can start transfering your money to another user.
                        </p>
                    </div>
                </div>
                <div className="bottom-personal-information-container">
                    <InputAuth
                        type="number"
                        phone
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        onKeyUp={buttonHandler}
                    />
                    <br />
                    {errorMsg ? <p className="text-validation">{errorMsg}</p> : null}
                    <Button style={{cursor:'pointer'}}  disabled={isDisabled} onClick={addPhone} >
                        Add Phone Number
                    </Button>

                </div>
            </div>
    )
}

export default AddPhone
