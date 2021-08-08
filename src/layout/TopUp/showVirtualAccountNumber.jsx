import React, { useState } from "react";
import { useEffect } from "react";

export const showVirtualAccountNumber = (usePrefix) => {
  const phoneNumber = JSON.parse(localStorage.getItem("userData")).phoneNumber;
  const prefix = ["045 - ", ""];
  return (
    <div
      className="profile-top-container set-margin-for-dash"
      style={{ height: "15rem", marginBottom: "4rem" }}
    >
      <div className="margin-profile-container">
        <div className="balance-detail">
          <div className="row-balance">
            <h3>
              {" "}
              {usePrefix
                ? "Your Virtual Account Number"
                : "Your Phone Number"}{" "}
            </h3>
            <h1 className="col-white">
              {" "}
              {usePrefix ? prefix[0] : prefix[1]} {phoneNumber}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
