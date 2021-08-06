import React from "react";

import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";





export const TopUpContent = () => {
  return (
    <div className="right">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>     
          <Link
              to={``}
              style={{ textDecoration: "none" }}
            //   key={}
            >
              <div className="transfer-item-wrapper">
                <img
                  src={ `https://randomuser.me/api/portraits/men/.jpg`}
                  alt="friend profile"
                  className="transfer-contact-image"
                  width={"60px"}
                />
                <div className="transer-contact">
                  <p className="transfer-primary-text">BCA OneKlik</p>
                  <p className="transfer-secondary-text">Easy to top up only one click away from your finger</p>
                </div>
              </div>
            </Link>
              {/* BCA OneKlik 
          <p>Easy to top up only one click away from your finger</p> */}
          </Accordion.Header>
         
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Bank Transfer</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
