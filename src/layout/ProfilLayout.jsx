import React, { useEffect, useReducer, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Dashboard from "../component/Dashboard";
import { Footer } from "../component/Footer";
import NavBar from "../component/NavBar";
import { Link, Redirect } from "react-router-dom";

export const ProfilLayout = () => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  function doLogOut()  {
    localStorage.removeItem("userData")
    forceUpdate()
    console.log('in dashboard')
    
  }
  
  const [UserData, setUserData] = useState({});
  const [FriendsData, setFriendsData] = useState([]);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
    setFriendsData(JSON.parse(localStorage.getItem("friends-data")));
  }, []);


  if  (!JSON.parse(localStorage.getItem('userData') )){
    console.log('in if')
    return <Redirect to='/login'/>
    
  }

  return (
      <div className="right-top-up">
        <div className="profile-page-container">
          <div className="profile-top-container2">
            <div className="margin-profile-container">
              <div className="profile-img-detail">
                <div className="img-edit">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${UserData.id}.jpg`}
                    alt=""
                  />
                  <p
                    onclick="goToPersonalInfo() "
                    className="fa fa-pencil-alt col-grey"
                  >
                    &nbsp;&nbsp; <span> Edit</span>{" "}
                  </p>
                </div>

                <div className="img-edit col-dark-grey">
                  <h1 className="col-dark-grey">{UserData.name}</h1>
                  <h2 className="col-grey">{UserData.phone}</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Bawah */}
          <div className="profile-bottom-container col-grey">
            <div className="left-profile-bottom-container">
              <ul>
                {/* <!-- 1 --> */}
                <Link to="/profil/personalinfo">
                  <li>
                    <div className="card-notification ">
                      <h2>Personal Information</h2>
                      <i class="fa fa-arrow-right">
                        <FaArrowRight/>
                      </i>
                    </div>
                  </li>
                </Link>

                {/* <!-- 2 --> */}
                <Link to='/profil/changePassword'>
                <li>
                    <div className="card-notification ">
                      <h2>Change Password</h2>
                      <i className="fa fa-arrow-right">
                        <FaArrowRight></FaArrowRight>
                      </i>
                    </div>
                  </li>
                </Link>
           
              
               
                {/* <!-- 3 --> */}
                <Link to='/profil/changePin'>
                <li>
                    <div className="card-notification ">
                      <h2>Change PIN</h2>
                      <i class="fa fa-arrow-right">
                        <FaArrowRight/>
                      </i>
                    </div>
                  </li>
                </Link>
              
                
        
                {/* <!-- 4 --> */}
                <a onClick={doLogOut}>
                  <li>
                    <div className="card-notification ">
                      <h2>Log Out</h2>
                      <i className="fa fa-arrow-right">
                        <FaArrowRight/>
                      </i>
                    </div>
                  </li>
                </a>
              </ul>
            </div>
            {/* <!-- LEFT CONTAINER END --> */}
            <div className="right-profile-bottom-container">
              <div className="see-all-contact">
                <h2>Contacts Info</h2>
                <Link to="/friendslist" className="col-secondary">
                  See All
                </Link>
              </div>
              {/* <!-- Contact --> */}
              <div className="contact-list-container">
                {FriendsData.filter((friend) => UserData.id != friend.id)
                  .slice(1 - 5)
                  .map((friend) => (
                    <div className="profile-container">
                      <div className="profile-img">
                        <img
                          src={`https://randomuser.me/api/portraits/men/${friend.id}.jpg`}
                          alt=""
                        />
                      </div>
                      <div className="profile-data">
                        <h3>{friend.name}</h3>
                        <p className="col-white50">{friend.phone}</p>
                      </div>
                    </div>
                  ))}

                {/* <!-- End Contact List --> */}
              </div>
            </div>

            {/* <!--  --> */}
          </div>
        </div>
      </div>
    // <div className="container">
    //   <Dashboard></Dashboard>
    //   <NavBar></NavBar>
    //   <Footer></Footer>
    // </div>
  );
};
