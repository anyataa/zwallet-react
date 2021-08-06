import React, { useEffect, useState, useReducer } from "react";
import Dashboard from "../component/Dashboard";
import { Footer } from "../component/Footer";
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { urlAPI } from "../asset/urls";
import { AiFillEdit, AiOutlineEdit } from "react-icons/ai";
import Button from "../component/Button"

export const PersonalInfoLayout = () => {
    const [userData, setUserData] = useState({})
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState({})
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
      if(JSON.parse(localStorage.getItem('userData'))){
        setUserData(JSON.parse(localStorage.getItem('userData')))
        setFullName((JSON.parse(localStorage.getItem('userData')).userName))
        setEmail((JSON.parse(localStorage.getItem('userData')).userEmail))
        setPhoneNumber(JSON.parse(localStorage.getItem('userData')).phoneNumber)
        forceUpdate()
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
      axios.put(urlAPI + `/user/update-email/${JSON.parse(localStorage.getItem('userData')).userId}`, {email : email})
      .then(res => {
        console.log(res.data)
        setEmail(input)
        let existingData = userData
        existingData['userEmail'] = email
        localStorage.setItem('userData', JSON.stringify(existingData))
      })
      .catch(err => {
        console.log(err)
        console.log('masuk ke error')
      })
    }

    const changeName = function (input) {
      var body = {
        username : fullName
      }
      axios.put(urlAPI + `/user/updateuser/${JSON.parse(localStorage.getItem('userData')).userId}`, body)
      .then(res => {
        console.log(res.data)
        setFullName(input)
        let existingData = userData
        existingData['userName'] = fullName
        localStorage.setItem('userData', JSON.stringify(existingData))
      })
      .catch(err => {
        console.log(err)
        console.log('masuk ke error')
      })
    }

    // const changeEmail = function (input) {
    //   setEmail(input)
    //   console.log(Email)
    //   let existingData = UserData
    //   existingData['email'] = Email
    //   localStorage.setItem('userData', JSON.stringify(existingData))
    // }

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
                <p className="col-grey">Full Name<Link style={{fontSize: '18px', textDecoration:'none', paddingLeft: '0vw', color: '#6379F4'}} onClick={changeName}> Submit</Link></p>
                <input className="col-dark-grey" 
                type="text" 
                onChange={e => setFullName(e.target.value)} 
                value={fullName} />
              </div>
            </li>
            {/* <!-- 2 --> */}
            <li>
              <div className="card-notification">
                <p className="col-grey">Verified E-mail<Link style={{fontSize: '18px', textDecoration:'none', paddingLeft: '0vw', color: '#6379F4'}} onClick={changeEmail}> Submit</Link></p>
                <input
                  className="col-dark-grey"
                  type="text"
                  onInput={ e => changeEmail(e.target.value)}
                  value={email}
                />
              </div>
            </li>
            {/* <!-- 3 --> */}
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
           {/* <!-- 3 --> */}
           <li>
              <div className="card-notification">
              <div style={{color: '#6379F4', alignItems: 'center', justifyContent: 'center'}}><Button>Upgrade to Zwallet Premium with Identity Card</Button></div>
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
