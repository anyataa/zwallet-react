import React, { useEffect, useState } from 'react'
import { Footer } from '../component/Footer'
import "../style/dashboard.css"
import "../style/global.css"
import "../style/navBar.css"
import "../style/Font/style.css"
import NavBar from "../component/NavBar"
import Dashboard from "../component/Dashboard"
import { FiTrash } from "react-icons/fi"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { urlAPI } from '../asset/urls'

const ManagePhone = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getPhoneNumber()
    }, [])

    const getPhoneNumber = () => {
        if (localStorage.getItem("userData")) {
            axios.get(urlAPI + `/phone/${JSON.parse(localStorage.getItem("userData")).userId}`)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
        }
    }

    const setPrimary = (id) => {
        if (localStorage.getItem("userData")) {
            var data = {
                userId: JSON.parse(localStorage.getItem("userData")).userId,
                phoneNumberId: id
            }
            axios.put(urlAPI + `/phone/set-primary`, data)
            .then(res => {
                console.log(res.data)
                getPhoneNumber()
            })
            .catch(err => console.log(err))
        }
    }

    const renderPhoneNumbers = () => {
        if(data.length > 0) {
            return data.map(phone => (
                <li>
                    <div className="card-notification">
                        {
                            phone.primary ? <p className="col-grey">Primary</p> : null
                        }
                        {/* Change Phone based on Local Storage */}
                        <input className="col-dark-grey"  type="number" value={phone.phoneNumber} />
                        <h3 className="col-dark-grey">+62</h3>
                        {/* <button className="col-grey button-trash" ><FiTrash/></button> */}
                    </div>
                    {
                        phone.primary ? null : <div onClick={() => setPrimary(phone.phoneNumberId)} style={{width: '20px', height: '20px', backgroundColor: 'red', borderRadius: '10px'}}/>
                    }
                </li>
            ))
        }
    }

    return (
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
                            {/* <li> */}
                                {/* <div className="card-notification">
                                    <p className="col-grey">Primary</p> */}
                                    {/* Change Phone based on Local Storage */}
                                    {/* <input className="col-dark-grey"  type="number" value="813456829333" />
                                    <h3 className="col-dark-grey">+62</h3> */}
                                    {/* <button className="col-grey button-trash" ><FiTrash/></button> */}
                                {/* </div> */}
                                {renderPhoneNumbers()}
                            {/* </li> */}
                            <div className="input-create-new-button bg-secondary col-white" style={{height:'4rem'}}>
                                <Link style={{textDecoration:"none", color:"white"}} to='/profil/addPhone'>
                                <but >Add Phone Number</but>
                                </Link>
                               
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        // <div className="container">
        //     <Dashboard />
        //     <NavBar />
        //     <Footer />
        // </div>
    )
}

export default ManagePhone
