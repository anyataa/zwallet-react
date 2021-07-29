import React, { useEffect, useState } from "react";
import Dashboard from "../component/Dashboard";
import { Footer } from "../component/Footer";
import NavBar from "../component/NavBar";


export const SeeAllFriends = () => {
  const [UserData, setUserData] = useState({});
  const [FriendsData, setFriendsData] = useState([]);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
    setFriendsData(JSON.parse(localStorage.getItem("friends-data")));
  }, []);
  return (
    // Can be used for reusable component
    <div className="container">
        <Dashboard></Dashboard>
        <NavBar></NavBar>
      <div className="right">
        <div className="contact-list-container">
        
          {FriendsData? FriendsData.filter((friend) => UserData.id != friend.id).map(
            (friend) => (
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
            )
          ): <h1>No Friends Available Yet...</h1> }

          {/* <!-- End Contact List --> */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
