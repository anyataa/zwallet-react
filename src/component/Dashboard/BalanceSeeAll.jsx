import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BalanceTransaction } from "./BalanceTransaction";
import DynamicChart from "./Chart";
import { Link } from "react-router-dom";
import { inRupiah } from "../../global";
import axios from "axios";
import { urlAPI } from "../../asset/urls";
import { useSelector } from "react-redux";

const BalanceSeeAll = () => {
  const [transactionData, setTransactionData] = useState({});

  const user = useSelector((state) => state.user);

  useEffect(() => {
    // getTransactionData();
  }, []);

  const getTransactionData = () => {
    axios
      .get(`${urlAPI}/transaction/${user.accountId}`)
      .then((res) => {
        setTransactionData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const renderIncomeOutcome = () => {
    if (transactionData.sumIncome >= 0 && transactionData.sumOutcome >= 0) {
      return (
        <div className="balance-detail">
          <div className="row-balance">
            <i>
              <FaArrowDown className="col-green"></FaArrowDown>
            </i>
            <p>Income</p>
            <h2>{inRupiah(transactionData.sumIncome)}</h2>
          </div>
          <div className="row-balance">
            <i>
              {" "}
              <FaArrowUp className="col-red"></FaArrowUp>
            </i>
            <p>Outcome</p>
            <h2>{inRupiah(transactionData.sumOutcome)}</h2>
          </div>
        </div>
      );
    } else {
      return <div>Error Fetching Balance</div>;
    }
  };

  return (
    <div className="profile-bottom-container">
      {/* Left */}
      <div className="left-dash-bottom-container">
        \{renderIncomeOutcome()}
        <div className="chart-wrapper">
          <DynamicChart></DynamicChart>
        </div>
      </div>
      {/* Left Container End */}
      {/* Right Start */}
      <div className="right-dash-bottom-container">
        <div className="see-all-contact">
          <h2>Transaction History</h2>
          <Link to="/seealltransaction" className="col-secondary">
            See All
          </Link>
        </div>
        <BalanceTransaction></BalanceTransaction>
      </div>
    </div>
  );
};

export default BalanceSeeAll;
