import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { urlAPI } from "../asset/urls";
import Dashboard from "../component/Dashboard";
import { Footer } from "../component/Footer";
import NavBar from "../component/NavBar";


export const SeeAllFriends = () => {
  const [friendsData, setFriendsData] = useState([]);

  const user = useSelector(state => state.user)

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    axios.get(urlAPI + `/friends/${user.userId}`)
    .then(res => setFriendsData(res.data))
    .catch(err => console.log(err))
  }

  const renderFriends = () => {
    if(friendsData.length > 0) {
      return friendsData.map(key => (
        <div className="profile-container">
          <div className="profile-img">
            <img
              src={key.userImage ? urlAPI + `/files/download/${key.userImage}` : "https://i.ibb.co/FHLx6h9/default.png"}
              alt=""
            />
          </div>
          <div className="profile-data">
            <h3>{key.username}</h3>
            <p className="col-white50">{key.phoneNumber}</p>
          </div>
        </div>
      ))
    }else{
      return <h1>No Friends Available Yet...</h1>
    }
  }

  return (
    // Can be used for reusable component
    <div className="container">
        <Dashboard/>
        <NavBar/>
      <div className="right">
        <div className="contact-list-container">
        
          {renderFriends()}

          {/* <!-- End Contact List --> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};
