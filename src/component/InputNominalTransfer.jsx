import React, { useEffect, useState } from "react";
import "../style/transfer.css";
import "../style/navBar.css";
import { Link } from "react-router-dom";
import { formatRupiah } from "../global";

export const InputNominalTransfer = (props) => {
  const [data, setData] = useState([]);
  const [Balance, setBalance] = useState(0)
  const [nominalTransfer, setNominalTransfer] = useState();
  const [noteTransfer, setNoteTransfer] = useState("");


  useEffect(() => {
    var tempData = JSON.parse(localStorage.getItem('friends-data'))
    // for(let i=0; i < tempData.length; i++){
    //   if(tempData[i].id == props.match.params.id){
    //     setData(tempData[i])
    //   }
    // }

    // Set balance based on account-data in local storage
    // CHANGE : "data.balance" change to "Balance"
    // Did not query from friends anymore :)
    
    setBalance(JSON.parse(localStorage.getItem('account-data')).balance)
  }, [])
  
  const onContinue = () => {
    if(nominalTransfer && noteTransfer){
      localStorage.setItem('transfer-data', JSON.stringify({id: data.id, name: data.name, phone: data.phone, nominalTransfer, noteTransfer, balance: Balance - nominalTransfer}))
    }
  }

  return (
    <div className="right">
      <p className="transfer-primary-text">Transfer Money</p>
      <div className="transfer-item-wrapper">
        <img
          src={data.userImage ? `https://randomuser.me/api/portraits/men/${data.id}.jpg` : "https://i.ibb.co/FHLx6h9/default.png"}
          alt=""
          className="transfer-contact-image"
          width="70px"

        />
        <div className="transer-contact">
          <p className="transfer-primary-text">{data.username ? data.username : "Samuel Suhi"}</p>
          <p className="transfer-secondary-text">{data.phoneNumber ? data.phoneNumber : "082222222222"}</p>
        </div>
      </div>

      <div className="transfer-input-amount-wrapper">
        <p className="transfer-secondary-text">
          Type the amount you want to transfer and then
          <br />
          press continue to the next steps.
        </p>
        <div className="transfer-input-amount-wrapper2">
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
            <input
              type="text"
              id="transfer-input-notes"
              placeholder="Add some notes"
              value={noteTransfer}
              onChange={(e)=> setNoteTransfer(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="set-transfer-button-confirmation">
        <Link to={`/transfer`} style={{ textDecoration: "none" }} >
          <input type="button" value="Back" className="transfer-btn" />
        </Link>
        <Link to={`/transfer/${data.id}/confirmation`}>
          <input type="button" value="Continue" className="transfer-btn" onClick={onContinue} disabled={nominalTransfer && noteTransfer && (Balance - nominalTransfer) > 0 ? false : true}/>
        </Link>
      </div>
    </div>
  );

  // return (
  //   < >
  //     <p class="transfer-primary-text">Transfer Money</p>
  //     <div class="transfer-item-wrapper">
  //         {console.log(props)}
  //       <img
  //         src={`https://randomuser.me/api/portraits/men/${props.transferTo[0].id}.jpg`}
  //         alt=""
  //         class="transfer-contact-image"
  //         width="70px"

  //       />
  //       <div className="transer-contact">
  //         <p className="transfer-primary-text">{props.transferTo[0].name}</p>
  //         <p className="transfer-secondary-text">{props.transferTo[0].phone}</p>
  //       </div>
  //     </div>

  //     <div className="transfer-input-amount-wrapper">
  //       <p className="transfer-secondary-text">
  //         Type the amount you want to transfer and then
  //         <br />
  //         press continue to the next steps.
  //       </p>
  //       <div className="transfer-input-amount-wrapper2">
  //         <input onChange={e => (setAmountInput(e))} value={props.amount} type="text" id="transfer-input-amount" placeholder="0.00" />
  //         <p className="transfer-primary-text">Rp{props.amount? props.transferTo[0].balance - props.amount: props.transferTo[0].balance} Available</p>
  //         {/* Check if amount exceeding the balance */}
  //         {}
  //         <div className="transfer-input-notes-wrapper">
  //           <img
  //             src="../assets/images/pen.svg"
  //             alt=""
  //             id="transfer-input-amount-icon"
  //           />
  //           <input
  //             type="text"
  //             name=""
  //             id="transfer-input-notes"
  //             placeholder="Add some notes"
  //             value={props.noteTransferIn}
  //             onChange={(e)=> props.setNoteTransfer(e.target.value)}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //     <div className="set-transfer-button-confirmation">
  //           <Link onClick={props.setContainerList} to="/transfer" style={{ textDecoration: "none" }}>
  //             <input type="button" value="Back" className="transfer-btn" />
  //           </Link>
  //             <input onClick={goToConfirmation} type="button" value="Continue" className="transfer-btn" />
  //         </div>
  //   </>
  // );
};
