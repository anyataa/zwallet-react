import React, { useEffect, useState, useReducer } from "react";
import Dashboard from "../component/Dashboard";
import { Footer } from "../component/Footer";
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { urlAPI } from "../asset/urls";
import { AiFillEdit, AiOutlineEdit } from "react-icons/ai";

export const PersonalInfoLayout = () => {
    const [UserData, setUserData] = useState({})
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState({})
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);


    useEffect(() => {
      if(JSON.parse(localStorage.getItem('userData'))){
        setUserData(JSON.parse(localStorage.getItem('userData')))
        setFirstName((JSON.parse(localStorage.getItem('userData')).userName).split(" ")[0])
        setLastName((JSON.parse(localStorage.getItem('userData')).userName).split(" ")[1])
        setEmail((JSON.parse(localStorage.getItem('userData')).userEmail))
        setPhoneNumber(JSON.parse(localStorage.getItem('userData')).phoneNumber)
        // getPhoneNumber()
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
      axios.put(urlAPI + `/user/update-email/${JSON.parse(localStorage.getItem('userData')).userId}`, {email : Email})
      .then(res => {
        console.log(res.data)
        setEmail(input)
        let existingData = UserData
        existingData['userEmail'] = Email
        localStorage.setItem('userData', JSON.stringify(existingData))
      })
      .catch(err => {
        console.log(err)
        console.log('masuk ke error')
      })
    }

    const changeFname = function (input) {
      axios.put(urlAPI + `/user/updatefname/${JSON.parse(localStorage.getItem('userData')).userId}`, {userFname : FirstName})
      .then(res => {
        console.log(res.data)
        setFirstName(input)
        let existingData = UserData
        existingData['userFname'] = FirstName
        localStorage.setItem('userData', JSON.stringify(existingData))
      })
      .catch(err => {
        console.log(err)
        console.log('masuk ke error')
      })
    }

    const changeLname = function (input) {
      axios.put(urlAPI + `/user/updatelname/${JSON.parse(localStorage.getItem('userData')).userId}`, {userLname : LastName})
      .then(res => {
        console.log(res.data)
        setFirstName(input)
        let existingData = UserData
        existingData['userLname'] = LastName
        localStorage.setItem('userData', JSON.stringify(existingData))
      })
      .catch(err => {
        console.log(err)
        console.log('masuk ke error')
      })
    }

    const changeName = function (input) {
      var body = {
        userFname : FirstName,
        userLname : LastName
      }
      axios.put(urlAPI + `/user/updateuser/${JSON.parse(localStorage.getItem('userData')).userId}`, body)
      .then(res => {
        console.log(res.data)
        setFirstName(input)
        let existingData = UserData
        existingData['userFname'] = FirstName
        existingData['userLname'] = LastName
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
                <p className="col-grey">First Name </p>
                <input className="col-dark-grey" 
                type="text" 
                onChange={e => setFirstName(e.target.value)} 
                value={FirstName} />
              </div>
            </li>
            {/* <!-- 2 --> */}
            <li>
              <div className="card-notification">
                <p className="col-grey">Last Name<AiOutlineEdit onClick={changeName} style={{fontSize: '30px', paddingLeft: '50vw', color: '#6379F4'}}/></p>
                <input className="col-dark-grey" 
                type="text" 
                onChange={e => setLastName(e.target.value)} 
                value={LastName} />
              </div>
            </li>
            {/* <!-- 3 --> */}
            <li>
              <div className="card-notification">
                <p className="col-grey">Verified E-mail<AiFillEdit onClick={changeEmail} style={{fontSize: '30px', paddingLeft: '50vw', color: '#6379F4'}}/></p>
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
