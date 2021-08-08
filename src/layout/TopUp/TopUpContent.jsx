import React from "react";

import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { topUpOption } from "../../global/topUpConstants";

export const TopUpContent = () => {
  const option = topUpOption;

  const renderTopUpMethods = () => {
    return option.map((item) => (
      <div>
        <Link
          to={`/topup/${item.url}`}
          style={{ textDecoration: "none" }}
          //   key={bank.friendId}
        >
          <div className="transfer-item-wrapper">
            <img
              src={
                item.name
                  ? `https://randomuser.me/api/portraits/men/${item.name}.jpg`
                  : "https://i.ibb.co/FHLx6h9/default.png"
              }
              alt="friend profile"
              className="transfer-contact-image"
              width={"60px"}
            />
            <div className="transer-contact">
              <p className="transfer-primary-text">{item.name}</p>
              <p className="transfer-secondary-text">{item.slogan}</p>
            </div>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <div className="right">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="transfer-primary-text" style={{ margin: "30px 0" }}>
          Choose Your Top Up Methods
        </p>
      </div>
      {renderTopUpMethods()}
    </div>
  );
};
