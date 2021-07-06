import React, { useEffect, useState } from "react";
import Dashboard from "../component/Dashboard";
import { Footer } from "../component/Footer";
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";

export const PersonalInfoLayout = () => {
    const [UserData, setUserData] = useState({})
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem('userData')))
        setFirstName((JSON.parse(localStorage.getItem('userData')).name).split(" ")[0])
        setLastName((JSON.parse(localStorage.getItem('userData')).name).split(" ")[1])
        setEmail((JSON.parse(localStorage.getItem('userData')).email))

    
    }, [])
    
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

      <div class="bottom-personal-information-container">
          <ul>
            {/* <!-- 1 --> */}
            <li>
              <div class="card-notification">
                <p class="col-grey">First Name</p>
                <input class="col-dark-grey" type="text" onChange={e => setFirstName(e.target.value)} value={(FirstName)} />
              </div>
            </li>
            {/* <!-- 2 --> */}
            <li>
              <div class="card-notification">
                <p class="col-grey">Last Name</p>
                <input class="col-dark-grey" type="text" onChange={e => setLastName(e.target.value)} value={(LastName)} />
              </div>
            </li>
            {/* <!-- 3 --> */}
            <li>
              <div class="card-notification">
                <p class="col-grey">Verified E-mail</p>
                <input
                  class="col-dark-grey"
                  type="text"
                  onInput={ e => changeEmail(e.target.value)}
                  value={Email}
                />
              </div>
            </li>
            {/* <!-- 4 --> */}
            <li>
              <div class="card-notification">
                <div class="divide-for-manage">
                  <div>
                    <p class="col-grey">Phone Number</p>
                    <input
                      class="col-dark-grey"
                      type="text"
                      value={UserData.phone}
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
