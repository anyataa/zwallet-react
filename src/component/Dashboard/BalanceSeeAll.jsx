import React, { Component} from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BalanceTransaction } from "./BalanceTransaction";
import DynamicChart from "./Chart";
import { Link } from "react-router-dom";
import { inRupiah } from "../../global";

export default class BalanceSeeAll extends Component {
  
  constructor() {
    super();
    this.state = {
      // income: localStorage.getItem("transaction-data") ? JSON.parse(localStorage.getItem("transaction-data")).sumIncome : 0,
      transactionData: null,
     income: null,
     outcome: null
      // outcome: localStorage.getItem("transaction-data") ? JSON.parse(localStorage.getItem("transaction-data")).sumOutcome : 0,
    }
  }

  componentDidMount() {
    if(JSON.parse(localStorage.getItem("transaction-data"))){
      this.setState(() => {return this.state.income = JSON.parse(localStorage.getItem("transaction-data")).sumIncome
      , this.state.outcome =JSON.parse(localStorage.getItem("transaction-data")).sumOutcome })
    }
    
  }

  componentDidUpdate() {
    // this.setState(() => {return this.state.income = JSON.parse(localStorage.getItem("transaction-data")).sumIncome
    // , this.state.outcome =JSON.parse(localStorage.getItem("transaction-data")).sumOutcome })
  }

  
  render() {
    return (
      <div className="profile-bottom-container">
        {/* Left */}
        <div className="left-dash-bottom-container">
        {
                this.state.income && this.state.outcome? 
                <div className="balance-detail">
         
            <div className="row-balance">
              <i>
                <FaArrowDown className="col-green"></FaArrowDown>
              </i>
             
              <p>Income</p>
              <h2>{inRupiah(this.state.income)}</h2>
            </div>
            <div className="row-balance">
              <i>
                {" "}
                <FaArrowUp className="col-red"></FaArrowUp>
              </i>

              <p>Outcome</p>
              <h2>{inRupiah(this.state.outcome)}</h2>
            </div>
          </div> : <div>Error Fetching Balance</div>
              }
          
          <div className="chart-wrapper">
            <DynamicChart></DynamicChart>
          </div>
        </div>
        {/* Left Container End */}
        {/* Right Start */}
        <div className="right-dash-bottom-container">
        <div className="see-all-contact">
          <h2>Transaction History</h2>
          <Link to='/seealltransaction'className="col-secondary" >See All</Link>
        </div>
       <BalanceTransaction start={0} end={4} ></BalanceTransaction>
       </div> 
      </div>
    );
  }
}
