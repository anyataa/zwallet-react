import React, { useEffect, useState } from 'react'
import { Footer } from '../component/Footer'
import "../style/dashboard.css"
import "../style/global.css"
import "../style/navBar.css"
import "../style/Font/style.css"
import NavBar from "../component/NavBar"
import Dashboard from "../component/Dashboard"
import InputAuth from "../component/InputAuth";
import Button from "../component/Button";
import { ModalStatus } from '../component/ModalStatus'
import axios from 'axios'
import { urlAPI } from '../asset/urls'

const AddPhone = ({setDisplay, display}, props) => {
    const [phone, setPhone] = useState();

    const [ShowModal, setShowModal] = useState(false)
    // const [StyleModal, setStyleModal] = useState("none")

    const [isDisabled, setIsDisabled] = useState(true);


    const addPhone = () => {
        if (localStorage.getItem("userData")) {
            var body = {
                phoneNumber: 0 + phone,
                userId: JSON.parse(localStorage.getItem("userData")).id
            }
            axios.post(urlAPI + '/phone/add', body)
            .then(res => {
                setDisplay()
            })
            .catch(err => console.log(err))
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
                        {/* {console.log("show",ShowModal)} */}
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
                    <Button style={{cursor:'pointer'}}  disabled={isDisabled} onClick={addPhone} >
                        Add Phone Number
                    </Button>
                    {/* {StyleModal} */}
                
                </div>
            </div>
        // <div className="container">
        //     <Dashboard />
        //     <NavBar />
        //     <Footer />
        // </div>
    )
}

export default AddPhone
