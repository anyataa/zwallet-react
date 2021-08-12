import React, { useEffect, useReducer, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Dashboard from "../component/Dashboard";
import { Footer } from "../component/Footer";
import NavBar from "../component/NavBar";
import { Link, Redirect } from "react-router-dom";
import ImageInput from "../component/ImageInput";
import { submitForm } from "../global";
import axios from "axios";
import { urlAPI } from "../asset/urls";
import { useSelector } from "react-redux";

export const ProfilLayout = () => {
  const [friendsData, setFriendsData] = useState([]);

  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    getContact();
  }, []);

  const getContact = () => {
    axios.get(urlAPI + `/friends/${user.userId}`).then((res) => {
      console.log(res.data);
      setFriendsData(res.data);
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("clicked");
    //TODOANYA: Change Edit Button to Submit to trigger the change of photo profil and save to DB
  };

  const doLogOut = () => {
    axios.put(
      urlAPI +
        `/user/signout-status/${
          JSON.parse(localStorage.getItem("userData")).userId
        }`
    );
    localStorage.removeItem("userData");
    forceUpdate();
  };

  const renderContactList = () => {
    if (friendsData.length > 0) {
      return friendsData.map((key) => (
        <div className="profile-container" key={key.friendId}>
          <div className="profile-img">
            <img
              src={
                key.userImage
                  ? urlAPI + `/files/download/${key.userImage}`
                  : "https://i.ibb.co/FHLx6h9/default.png"
              }
              alt=""
            />
          </div>
          <div className="profile-data">
            <h3>{key.username}</h3>
            <p className="col-white50">{key.phoneNumber}</p>
          </div>
        </div>
      ));
    } else {
      return (
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>You Have No Friends Yet...</h2>
          <h4>
            You can add friends from Zwallet Mobile by allowing access to your
            contacts
          </h4>
        </div>
      );
    }
  };

  if (user.userId == 0) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="right-top-up">
      <div className="profile-page-container">
        <div className="profile-top-container2">
          <div className="margin-profile-container">
            <div className="profile-img-detail">
              <div className="img-edit">
                <form
                  onSubmit={(e) => submitForm(e)}
                  className="create-contact-form"
                >
                  <ImageInput
                    className="create-contact-avatar-input"
                    name="avatarURL"
                    maxHeight={64}
                  />

                  <input type="submit" value="&nbsp;&nbsp;&nbsp;&nbsp;Edit" />
                </form>
              </div>

              <div className="img-edit col-dark-grey">
                <h1 className="col-dark-grey">{user.userName}</h1>
                <h2 className="col-grey">
                  +62{" "}
                  {user.phoneNumber
                    ? user.phoneNumber.slice(1, user.phoneNumber.length)
                    : "Error"}
                </h2>
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
                    <i className="fa fa-arrow-right">
                      <FaArrowRight />
                    </i>
                  </div>
                </li>
              </Link>

              {/* <!-- 2 --> */}
              <Link to="/profil/changePassword">
                <li>
                  <div className="card-notification ">
                    <h2>Change Password</h2>
                    <i className="fa fa-arrow-right">
                      <FaArrowRight />
                    </i>
                  </div>
                </li>
              </Link>

              {/* <!-- 3 --> */}
              <Link to="/profil/changePin">
                <li>
                  <div className="card-notification ">
                    <h2>Change PIN</h2>
                    <i className="fa fa-arrow-right">
                      <FaArrowRight />
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
                      <FaArrowRight />
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
            <div className="contact-list-container">{renderContactList()}</div>
          </div>

          {/* <!--  --> */}
        </div>
      </div>
    </div>
  );
};
