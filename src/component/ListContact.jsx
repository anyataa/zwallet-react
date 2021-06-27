import React, { Component } from "react";

import "../style/transfer.css";
import "../style/global.css";
import "../style/navBar.css";
import { Link } from "react-router-dom";
import { TransferConfirmation } from "./TransferConfirmation";

export default class ListContact extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], query: "", id: "" , container:"right" };
  }

  url = "https://randomuser.me/api/portraits/men/1.jpg"

  // set  state data for friends list based on localstorage
  fetchProfile = () => {
    
    if (localStorage.getItem("friends-data")) {
      this.setState((currentState) => ({
        data: JSON.parse(localStorage.getItem("friends-data")),
      }));
    }
  };

  // Query based on the input based on state
  queryContact = (input) => {
    this.setState((currentState) => ({ query: input.target.value.trim()}));
  };
setContainer= () => {
  if (this.state.container == "") {
this.setState((currentState) => ({container : "right"}))
  } else {
    this.setState((currentState) => ({container: ""}))
  }
  console.log("right:", this.state.container)
  
}

  componentDidMount() {
    this.fetchProfile();
  }

  render() {
    const { query, data } = this.state;
    const { queryContact } = this;
    const showContact =
      query === ""
        ? data
        : data.filter((d) =>
            d.name.toLowerCase().includes(query.toLowerCase())
          );
    return (
      <div className={this.state.container}>
        {window.location.href === "http://localhost:3000/transfer" && (
          <input
            className="transfer-input"
            onChange={(e) => queryContact(e)}
            placeholder="Search Contact"
          ></input>
        )}

        {window.location.href === "http://localhost:3000/transfer" ? (
          showContact.map((contact) => (
            <Link
            onClick={this.setContainer}
              to={`/transfer/${contact.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="transfer-item-wrapper" key={contact.id}>
                {contact.id}
                <img
                  src={`https://randomuser.me/api/portraits/men/${contact.id}.jpg`}
                  alt="friend profile"
                  className="transfer-contact-image"
                  width={"60px"}
                ></img>
                <div className="transer-contact">
                  <p className="transfer-primary-text">{contact.name}</p>
                  <p className="transfer-secondary-text">{contact.phone}</p>
                </div>
              </div>
            </Link>
            // do the else if window.href is not exact /transfer
          ))
        ) : (
          <TransferConfirmation data={data} setContainer={() => this.setContainer()} container={this.state.container}>
          </TransferConfirmation>
        )}
      </div>
    );
  }
}
