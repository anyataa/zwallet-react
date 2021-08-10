import React, { useEffect, useState } from "react";
// import "../style/transfer.css";
// import "../style/global.css";
// import "../style/navBar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../../component/Button";
import { AiOutlineSearch } from "react-icons/ai";
import { urlAPI, urlFile } from "../../asset/urls";
import { useSelector } from "react-redux";

const PartnerList = () => {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.user);

  // const [searchValue, setSearchValue] = useState("");
  // const [Partner, setPartner] = useState([]);

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = () => {
    axios
      .get(`${urlAPI}/user/bank`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const renderContact = () => {
    if (data.length > 0) {
      console.log(data);
      return data.map((bank, index) => {
        if (bank.username) {
          return (
            <Link
              to={`/retrieval/${bank.username}`}
              style={{ textDecoration: "none" }}
              key={bank.username}
            >
              <div className="transfer-item-wrapper">
                <img
                  src={
                    bank.username
                      ? `${urlFile}/${bank.username}.png`
                      : "https://i.ibb.co/FHLx6h9/default.png"
                  }
                  alt="friend profile"
                  className="transfer-contact-image"
                  width={"60px"}
                />
                <div className="transer-contact">
                  <p className="transfer-primary-text">{bank.username}</p>
                  <p className="transfer-secondary-text">{bank.username}</p>
                </div>
              </div>
            </Link>
          );
        }
      });
    } else {
      return (
        <h1 style={{ margin: "auto" }}>
          Couldn't Load The Partners Data
          <br />
          <br />
          Please Check Your Internet Connection
        </h1>
      );
    }
  };

  return (
    <div className="right">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="transfer-primary-text" style={{ margin: "30px 0" }}>
          Choose Your Retrieval Methods
        </p>
      </div>
      {renderContact()}
    </div>
  );
};

export default PartnerList;
