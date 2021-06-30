import React, { useState } from 'react'
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

const AddPhone = () => {
    const [phone, setPhone] = useState();

    const [ShowModal, setShowModal] = useState(false)

    const [isDisabled, setIsDisabled] = useState(true);

    const [StyleModal, setStyleModal] = useState("none")

    const buttonHandler = () => {
        if (phone) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
        console.log(isDisabled);
    };

    return (
        <div className="container">
            <Dashboard />
            <NavBar />
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
                    <Button style={{cursor:'pointer'}}  disabled={isDisabled} onClick={e => setStyleModal("flex")} >
                        Add Phone Number
                    </Button>
                    {/* {StyleModal} */}
                
                </div>
            </div>
            <Footer />
             <ModalStatus setDisplay={setStyleModal} display={StyleModal} activity="Add Phone Number"></ModalStatus> 
        </div>
    )
}

export default AddPhone
