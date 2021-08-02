import React, { useEffect, useState } from "react";
import Dashboard from "../component/Dashboard";
import { Footer } from "../component/Footer";
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { urlAPI } from "../asset/urls";

export const PersonalInfoLayout = () => {
    const [UserData, setUserData] = useState({})
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState({})

    useEffect(() => {
      if(JSON.parse(localStorage.getItem('userData'))){
        setUserData(JSON.parse(localStorage.getItem('userData')))
        setFirstName((JSON.parse(localStorage.getItem('userData')).userName).split(" ")[0])
        setLastName((JSON.parse(localStorage.getItem('userData')).userName).split(" ")[1])
        setEmail((JSON.parse(localStorage.getItem('userData')).userEmail))
        setPhoneNumber(JSON.parse(localStorage.getItem('userData')).phoneNumber)
        // getPhoneNumber()

      }
    
    }, [])

    // const getPhoneNumber = () => {
    //   if (localStorage.getItem("userData")) {
    //     axios.get(urlAPI + `/phone/get-primary/${JSON.parse(localStorage.getItem("userData")).user.userId}`)
    //     .then(res => {
    //         console.log(res.data)
    //         setPhoneNumber(res.data.phoneNumber)
    //     })
    //     .catch(err => console.log(err))
    //   }
    // }
    
    const changeEmail = function (input) {
        setEmail(input)
        console.log(Email)
        let existingData = UserData
        existingData['email'] = Email
        localStorage.setItem('userData', JSON.stringify(existingData))
    }
  return (
      <div className="right-personal-information">
          {/* Top */}
        <div className="personal-information-top-container">
          <div className="set-to-left">
            <h1 className="col-dark-grey">Personal Information</h1>
            <p className="col-grey">
              We got your personal information from the sign up proccess. If you
              want to make changes on your information, contact our support.
            </p>
          </div>
        </div>
            {/* Top End */}

      <div className="bottom-personal-information-container">
          <ul>
            {/* <!-- 1 --> */}
            <li>
              <div className="card-notification">
                <p className="col-grey">First Name</p>
                <input className="col-dark-grey" type="text" onChange={e => setFirstName(e.target.value)} value={(FirstName)} />
              </div>
            </li>
            {/* <!-- 2 --> */}
            <li>
              <div className="card-notification">
                <p className="col-grey">Last Name</p>
                <input className="col-dark-grey" type="text" onChange={e => setLastName(e.target.value)} value={(LastName)} />
              </div>
            </li>
            {/* <!-- 3 --> */}
            <li>
              <div className="card-notification">
                <p className="col-grey">Verified E-mail</p>
                <input
                  className="col-dark-grey"
                  type="text"
                  onInput={ e => changeEmail(e.target.value)}
                  value={Email}
                />
              </div>
            </li>
            {/* <!-- 4 --> */}
            <li>
              <div className="card-notification">
                <div className="divide-for-manage">
                  <div>
                    <p className="col-grey">Phone Number</p>
                    <input
                      className="col-dark-grey"
                      type="text"
                      value={phoneNumber}
                      disabled
                    />
                  </div>
                  <Link className="col-secondary" to='/profil/managephone'> Manage</Link>
                  
                </div>
              </div>
            </li>
           
          </ul>
           {/* <!-- Finish --> */}
        </div>
      </div>
    // <div className="container">
    //   {/* <Dashboard></Dashboard>
    //   <NavBar></NavBar> */}
    //   {/* <Footer></Footer> */}
    // </div>
  );
};
