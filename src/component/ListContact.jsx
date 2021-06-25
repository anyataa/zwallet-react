import React, { Component } from "react";
import axios from "axios";
import "../style/transfer.css";
// import "../style/dashboard.css";
import "../style/global.css";
import "../style/navBar.css";


export default class ListContact extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], query: "" };
  }

// Get user data for the list
fetchProfile = () => {
  axios.get("http://localhost:4000/user").then((res) => {
    this.setState({ data: res.data });
    console.log(res.data)
    // Local storage set item will soon be removed once Redux is implemented
    localStorage.setItem('data', JSON.stringify(res.data))
  });
};

  // Query based on the input
  queryContact = (input) => {
    this.setState(() => ({ query: input.target.value.trim() }));
  };

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
      <div className="right-transfer">
        <input
        class="transfer-input"
          onChange={(e) => queryContact(e)}
          placeholder="Search Contact"
        ></input>
        {showContact.map((contact) => (
          <div className="transfer-item-wrapper" key={contact.name}>
            <img
              src={require("./../asset/image/friend1.png").default}
              alt="friend profile"
              className="transfer-contact-image"
            ></img>
            <div className="transer-contact">
              <p className="transfer-primary-text">{contact.name}</p>
              <p className="transfer-secondary-text">{contact.phone}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
