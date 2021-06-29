import React from 'react'
import { Footer } from '../component/Footer'
import "../style/dashboard.css"
import "../style/global.css"
import "../style/navBar.css"
import "../style/Font/style.css"
import NavBar from "../component/NavBar"
import Dashboard from "../component/Dashboard"
import { FiTrash } from "react-icons/fi"

const ManagePhone = () => {

    return (
        <div className="container">
            <Dashboard />
            <NavBar />
            <div className="right-change-password">
                <div className="personal-information-top-container">
                    <div className="set-to-left">
                        <h1 className="col-dark-grey">Manage Phone Number</h1>
                        <p className="col-grey">
                            You can only delete the phone number and then you must add another phone number.
                        </p>
                    </div>
                </div>
                <div className="bottom-personal-information-container">
                    <div className="bottom-manage-phone-container">
                        <ul>
                            <li>
                                <div className="card-notification">
                                    <p className="col-grey">Primary</p>
                                    <input className="col-dark-grey" type="number" value="813456829333" />
                                    <h3 className="col-dark-grey">+62</h3>
                                    <button className="col-grey"><FiTrash/></button>
                                </div>
                            </li>
                            <div className="input-create-new-button bg-secondary col-white">
                                <but>Add Phone Number</but>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ManagePhone
