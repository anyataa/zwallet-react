import React from "react";
import { ImAirplane } from "react-icons/im";
import { Link } from "react-router-dom";
import CityLink from "../../asset/image/citylink.png";
import { IoAirplane } from "react-icons/io5";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { inRupiah } from "../../global";
import axios from "axios";
import { urlAPI } from "../../asset/urls";

export const FlightSummary = () => {
  const user = useSelector((state) => state.user);
  const nominalTransaksi = 1215000;
  const body = {
    transactionAmount: nominalTransaksi,
    transactionNotes: "Tiket Pesawat",
    toAccountId: user.accountId,
  };
  const onPost = () => {
    axios
      .post(`${urlAPI}/transaction/payments/Citilink`, body)
      .then((res) => {
        if (res.data.message.includes("Success")) {
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="right-top-up">
      <div className="profile-page-container">
        <div className="profile-top-container2">
          <div className="margin-profile-container">
            <div className="profile-img-detail">
              <h1>Flight from Jakarta to Bali / Denpasar</h1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <ImAirplane />
                <h2 style={{ marginLeft: "20px" }}>
                  Jakarta (HLP) ⇄ Bali / Denpasar (DPS) | 13 Aug 2021 - 15 Aug
                  2021
                </h2>
              </div>
              <h3>1 Adult | Economy</h3>
              <Link style={{ textDecoration: "none" }}>
                <div className="transfer-item-wrapper">
                  <img
                    src={CityLink}
                    className="transfer-contact-image"
                    style={{ width: "100px" }}
                  />
                  <div className="transer-contact">
                    <p className="transfer-primary-text">Citilink</p>
                    <p className="transfer-secondary-text">
                      Free Baggage 20kg | PCR Coupon | Rp17 Insurance
                    </p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          color: "black",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <p>15:55</p>
                        <p>Jakarta (HLP)</p>
                      </div>
                      <div
                        style={{
                          marginLeft: "7vw",
                          marginTop: "1vh",
                          color: "gray",
                        }}
                      >
                        <GoPrimitiveDot />
                        <IoAirplane />
                        <GoPrimitiveDot />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          color: "black",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: "10vw",
                        }}
                      >
                        <p>18:55</p>
                        <p>Bali (DPS)</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          color: "black",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: "10vw",
                        }}
                      >
                        <p>2h 0m</p>
                        <p>Direct</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <div className="transfer-item-wrapper">
                  <img
                    src={CityLink}
                    className="transfer-contact-image"
                    style={{ width: "100px" }}
                  />
                  <div className="transer-contact">
                    <p className="transfer-primary-text">Citilink</p>
                    <p className="transfer-secondary-text">
                      Free Baggage 20kg | PCR Coupon | Rp17 Insurance
                    </p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          color: "black",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <p>14:30</p>
                        <p>Bali (DPS)</p>
                      </div>
                      <div
                        style={{
                          marginLeft: "7vw",
                          marginTop: "1vh",
                          color: "gray",
                        }}
                      >
                        <GoPrimitiveDot />
                        <IoAirplane />
                        <GoPrimitiveDot />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          color: "black",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: "10vw",
                        }}
                      >
                        <p>15:25</p>
                        <p>Jakarta (HLP)</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          color: "black",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: "10vw",
                        }}
                      >
                        <p>1h 55m</p>
                        <p>Direct</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bawah */}
        <div className="profile-bottom-container col-grey">
          <div className="left-profile-bottom-container">
            <div style={{ color: "black" }}>
              <h1 style={{ fontSize: "34px" }}>Additional Information</h1>
              <h2 style={{ fontSize: "28px" }}>HLP → DPS</h2>
              <p style={{ fontSize: "22px" }}>
                <AiOutlineCheckCircle style={{ color: "green" }} />
                Refundable
              </p>
              <p style={{ fontSize: "22px" }}>
                <AiOutlineCheckCircle style={{ color: "green" }} />
                Reschedule Available
              </p>
              <h2 style={{ fontSize: "28px" }}>DPS → HLP</h2>
              <p style={{ fontSize: "22px" }}>
                <AiOutlineCheckCircle style={{ color: "green" }} />
                Refundable
              </p>
              <p style={{ fontSize: "22px" }}>
                <AiOutlineCheckCircle style={{ color: "green" }} />
                Reschedule Available
              </p>
            </div>
          </div>
          <div className="left-profile-bottom-container">
            <div style={{ color: "black" }}>
              <h1 style={{ fontSize: "38px" }}>Price Details</h1>
              <p style={{ fontSize: "34px" }}>
                Citilink (Adult) x1 Rp 1.215.000
              </p>
              <p style={{ fontSize: "34px" }}>PCR Coupon FREE</p>
              <p style={{ fontSize: "34px" }}>Free Protection FREE</p>
              <h2 style={{ fontSize: "34px" }}>
                Price you pay{" "}
                <span style={{ color: "#6379F4" }}>Rp 1.215.000</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="set-transfer-button-confirmation">
          <Link to="/billing" style={{ textDecoration: "none" }}>
            <input type="button" value="Cancel" className="transfer-btn" />
          </Link>
          <div
            className="transfer-item-wrapper transfer-confirmation-detail-wrapper"
            style={{ width: "20rem", height: "5rem" }}
          >
            <p className="transfer-secondary-text">Current Balance</p>
            <p className="transfer-primary-text">
              {inRupiah(user.accountBalance)}
            </p>
          </div>
          <div
            className="transfer-item-wrapper transfer-confirmation-detail-wrapper"
            style={{ width: "20rem", height: "5rem" }}
          >
            <p className="transfer-secondary-text">Remaining Balance</p>
            <p className="transfer-primary-text">
              {inRupiah(user.accountBalance - nominalTransaksi)}
            </p>
            {user.accountBalance - nominalTransaksi >= 0 ? null : (
              <p className="col-red">Please top up first</p>
            )}
          </div>
          <Link>
            <input
              disabled={
                user.accountBalance - nominalTransaksi >= 0 ? false : true
              }
              type="button"
              value="Pay"
              className="transfer-btn"
              onClick={() => onPost()}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
