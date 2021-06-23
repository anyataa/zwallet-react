import React, { Component } from "react";
import axios from "axios";
import "../style/transfer.css";
import "../style/dashboard.css";
import "../style/global.css";
import "../style/navBar.css";

export default class ListContact extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  handleChange = () => {
    axios.get("http://localhost:4000/profile").then((res) => {
      // console.log(res);
      this.setState({ data: res.data });
    });
  };

  componentDidMount() {
    this.handleChange();
  }
  render() {
    return (
      <div className="right">
        {this.state.data.map((data) => (
          <div className="transfer-item-wrapper" key={data.name}>
            <img
              src={require("./../asset/image/friend1.png").default}
              alt="friend profile"
              className="transfer-contact-image"
            ></img>
            <div className="transer-contact">
              <p className="transfer-primary-text">{data.name}</p>
              <p className="transfer-secondary-text">{data.phone}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
