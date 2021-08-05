import React, { useEffect, useState } from "react";
import "../../style/transfer.css";
import "../../style/navBar.css";
import { Link } from "react-router-dom";
import { formatRupiah } from "../../global";

export const InputNominalRetrieve = (props) => {
  const [data, setData] = useState([]);
  const [Balance, setBalance] = useState(0)
  const [nominalTransfer, setNominalTransfer] = useState();
  const [BankNumber, setBankNumber] = useState("");
  const [BankName, setBankName] = useState(null)
  const [RetrieveDetail, setRetrieveDetail] = useState(null)
  const [AccountId, setAccountId] = useState(null)


  useEffect(() => {
    var tempData = JSON.parse(localStorage.getItem('friends-data'))
    setBankName(props.match.params.id)
    setBalance(JSON.parse(localStorage.getItem('userData')).accountBalance)
    setAccountId(JSON.parse(localStorage.getItem('userData')).accountId)

  }, [])
  
  const onContinue = () => {
    setRetrieveDetail(`${BankName} : ${BankNumber} : ${AccountId}`)
    
    if(nominalTransfer && BankNumber){
      localStorage.setItem('retrieve-data', JSON.stringify({accountId : AccountId, bankName : BankName,amount : nominalTransfer, bankNumber : BankNumber, balance: Balance - nominalTransfer}))
      console.log(RetrieveDetail)
    }
  }

  return (
    <div className="right">
      <p className="transfer-primary-text">Retrieve Balance</p>
      <div className="transfer-item-wrapper">
        <img
          src={data.userImage ? `https://randomuser.me/api/portraits/men/${data.id}.jpg` : "https://i.ibb.co/FHLx6h9/default.png"}
          alt=""
          className="transfer-contact-image"
          width="70px"

        />
        <div className="transer-contact">
          <p className="transfer-primary-text">{BankName? `${BankName}` : "Bank"}</p>
          <p className="transfer-secondary-text">{BankNumber ? BankNumber : "Input Account Number Below"}</p>
        </div>
      </div>

      <div className="transfer-input-amount-wrapper">
        <p className="transfer-secondary-text">
          <br />
          Type the amount you want to retrieve and then
          <br />
          press continue to the next steps.
        </p>
       <br />
        <div className="transfer-input-amount-wrapper2" style={{display: 'flex', justifyContent: "space-between", marginBottom: '20vh'}}>
        <input style={{marginLeft:'-4rem',fontSize: '2rem'}} onChange={e => setBankNumber(e.target.value)} value={BankNumber} type="number" id="transfer-input-amount" placeholder={`Bank Number`} />
        <p className="transfer-primary-text">Input {BankName} Account Number</p>
          <input onChange={e => setNominalTransfer(e.target.value)} value={nominalTransfer} type="text" id="transfer-input-amount" placeholder="0.00" />
          {Balance - nominalTransfer <= 0 ?  <p className='col-red'>Amount exceeds your balance</p> : <p></p> }
          <p className="transfer-primary-text">{Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits:0 }).format(nominalTransfer ? Balance - nominalTransfer: Balance)} Available</p>
          {/* Check if amount exceeding the balance */}
          <div className="transfer-input-notes-wrapper">
            <img
              src="../assets/images/pen.svg"
              alt=""
              id="transfer-input-amount-icon"
            />
            {nominalTransfer?<p>This Process May Take 2-7 Work Days</p> : <p></p> }
            
          </div>
        
        </div>
      </div>
      <div className="set-transfer-button-confirmation">
        <Link to={`/retrieval`} style={{ textDecoration: "none" }} >
          <input type="button" value="Back" className="transfer-btn" />
        </Link>
        <Link to={`/retrieval/${BankName}/confirmation`}>
          <input type="button" value="Continue" className="transfer-btn" onClick={onContinue} disabled={nominalTransfer  && (Balance - nominalTransfer) > 0 ? false : true}/>
        </Link>
      </div>
    </div>
  );
};
