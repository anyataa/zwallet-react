import React, { useEffect, useState } from "react";
import { Footer } from "../component/Footer";
import "../style/dashboard.css";
import "../style/global.css";
import "../style/navBar.css";
import "../style/Font/style.css";
import NavBar from "../component/NavBar";
import Dashboard from "../component/Dashboard";
import { FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { urlAPI } from "../asset/urls";
import { useSelector } from "react-redux";

const ManagePhone = () => {
  const [data, setData] = useState([]);

  const user = useSelector(state => state.user)

  useEffect(() => {
    getPhoneNumber();
  }, []);

  const getPhoneNumber = () => {
    if (user.userId) {
      axios
        .get(
          urlAPI +
            `/phone/${user.userId}`
        )
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const setPrimary = (id) => {
    if (user.userId) {
      var data = {
        userId: user.userId,
        phoneNumberId: id,
      };
      axios
        .put(urlAPI + `/phone/set-primary`, data)
        .then((res) => {
          console.log(res.data);
          getPhoneNumber();
        })
        .catch((err) => console.log(err));
    }
  };

  const renderPhoneNumbers = () => {
    if (data.length > 0) {
      return data.map((phone) => (
        <li>
          <div className="card-notification">
            {phone.primary ? null : (
              <div
                onClick={() => setPrimary(phone.phoneNumberId)}
                style={{
                  width: "150px",
                  height: "20px",
                  backgroundColor: "#6379f4",
                  padding: "10px",
                  color: "white",
                  borderRadius: "10px",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
              >
                {" "}
                Set As Primary{" "}
              </div>
            )}
            {phone.primary ? <p className="col-grey">Primary</p> : null}
            {/* Change Phone based on Local Storage */}
            <input
              className="col-dark-grey"
              type="number"
              value={phone.phoneNumber}
            />
            <h3 className="col-dark-grey">+62</h3>
            {/* <button className="col-grey button-trash" ><FiTrash/></button> */}
          </div>
        </li>
      ));
    }
  };

  return (
    <div className="right-change-password">
      <div className="personal-information-top-container">
        <div className="set-to-left">
          <h1 className="col-dark-grey">Manage Phone Number</h1>
          <p className="col-grey">
            You can only delete the phone number and then you must add another
            phone number.
          </p>
        </div>
      </div>
      <div className="bottom-personal-information-container">
        <div
          className="bottom-manage-phone-container"
          style={{ marginTop: "-10rem" }}
        >
          <ul>
            {renderPhoneNumbers()}

            <div
              className="input-create-new-button bg-secondary col-white"
              style={{ height: "4rem" }}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/profil/addPhone"
              >
                <but>Add Phone Number</but>
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
  );
};

export default ManagePhone;
