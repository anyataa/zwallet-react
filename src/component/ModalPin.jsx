import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useReducer } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { onLoginAction } from "../actions";
import { urlAPI } from "../asset/urls";
import { setTransactionData } from "../global";

export const ModalPin = ({ modalToggle, setModalToggle }) => {
  //   Pin control
  const [pin1Value, setPin1Value] = useState("");
  const [pin2Value, setPin2Value] = useState("");
  const [pin3Value, setPin3Value] = useState("");
  const [pin4Value, setPin4Value] = useState("");
  const [pin5Value, setPin5Value] = useState("");
  const [pin6Value, setPin6Value] = useState("");

  const pin1Ref = useRef();
  const pin2Ref = useRef();
  const pin3Ref = useRef();
  const pin4Ref = useRef();
  const pin5Ref = useRef();
  const pin6Ref = useRef();

  // =========== Transfer ================
  const [message, setMessage] = useState("");

  const user = useSelector((state) => state.user);
  const transfer = useSelector(state => state.transfer)
  
  const dispatch = useDispatch()


  useEffect(() => {
    // setTransferData(JSON.parse(localStorage.getItem("transfer-data")));
  }, []);
  
  const onTransfer = () => {
    if (transfer && user) {
      var body = {
          //==================== Pin Data Where ========================
          transactionAmount: transfer.nominalTransfer,
          transactionNotes: transfer.noteTransfer,
          fromAccountId: user.accountId,
          toUserId: transfer.id,
          userPin: pin1Value + pin2Value + pin3Value + pin4Value + pin5Value + pin6Value,
        };
      axios.post(urlAPI + "/transaction/transfer", body)
      .then((res) => {
        if (res.data.message.includes("Sorry")) {
          setMessage(res.data.message);
        } else if (res.data.message.includes("Success")) {
          dispatch(onLoginAction({...user, accountBalance: res.data.data.fromAccountBalance}))
          
          setTransactionData(user.accountId);
          setModalToggle();
          setMessage(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage("Sorry, something went wrong...");

      });
    }
  };



  if(message.includes("something went wrong")){
    return <Redirect to="/transfer/status/failed"/>
  }else if(message.includes("Success")){
    return <Redirect to="/transfer/status/success"/>
  }
  return (
    // set display to flex for debugging
    <div id="modal" style={{ display: modalToggle ? "flex" : "none" }}>
      <div className="pin-confirmation-box">
        <div className="modal-close-icon-wrapper">
          <p className="transfer-primary-text">Enter PIN to Transfer</p>
          <FaTimes className="modal-close-icon" onClick={setModalToggle} />
        </div>
        <p className="transfer-secondary-text">
          Enter your 6 digits PIN for confirmation to <br />
          continue transferring money.
          <br />
          <span className="col-red">{message}</span>
        </p>
        <div className="transfer-pin-input-wrapper">
          <input
            type="number"
            className="transfer-input-pin"
            value={pin1Value}
            onChange={(e) =>
              setPin1Value(
                e.target.value.length > 1 ? e.target.value[1] : e.target.value
              )
            }
            ref={pin1Ref}
            onKeyUp={(e) =>
              e.code !== "Backspace" ? pin2Ref.current.focus() : null
            }
            style={{
              borderColor: pin1Value ? "#6379F4" : "rgba(66, 63, 63, 0.4",
            }}
          />
          <input
            type="number"
            className="transfer-input-pin"
            value={pin2Value}
            onChange={(e) =>
              setPin2Value(
                e.target.value.length > 1 ? e.target.value[1] : e.target.value
              )
            }
            ref={pin2Ref}
            onKeyUp={(e) =>
              e.code == "Backspace"
                ? pin1Ref.current.focus()
                : pin3Ref.current.focus()
            }
            style={{
              borderColor: pin2Value ? "#6379F4" : "rgba(66, 63, 63, 0.4",
            }}
          />
          <input
            type="number"
            className="transfer-input-pin"
            value={pin3Value}
            onChange={(e) =>
              setPin3Value(
                e.target.value.length > 1 ? e.target.value[1] : e.target.value
              )
            }
            ref={pin3Ref}
            onKeyUp={(e) =>
              e.code == "Backspace"
                ? pin2Ref.current.focus()
                : pin4Ref.current.focus()
            }
            style={{
              borderColor: pin3Value ? "#6379F4" : "rgba(66, 63, 63, 0.4",
            }}
          />
          <input
            type="number"
            className="transfer-input-pin"
            value={pin4Value}
            onChange={(e) =>
              setPin4Value(
                e.target.value.length > 1 ? e.target.value[1] : e.target.value
              )
            }
            ref={pin4Ref}
            onKeyUp={(e) =>
              e.code == "Backspace"
                ? pin3Ref.current.focus()
                : pin5Ref.current.focus()
            }
            style={{
              borderColor: pin4Value ? "#6379F4" : "rgba(66, 63, 63, 0.4",
            }}
          />
          <input
            type="number"
            className="transfer-input-pin"
            value={pin5Value}
            onChange={(e) =>
              setPin5Value(
                e.target.value.length > 1 ? e.target.value[1] : e.target.value
              )
            }
            ref={pin5Ref}
            onKeyUp={(e) =>
              e.code == "Backspace"
                ? pin4Ref.current.focus()
                : pin6Ref.current.focus()
            }
            style={{
              borderColor: pin5Value ? "#6379F4" : "rgba(66, 63, 63, 0.4",
            }}
          />
          <input
            type="number"
            className="transfer-input-pin"
            value={pin6Value}
            onChange={(e) =>
              setPin6Value(
                e.target.value.length > 1 ? e.target.value[1] : e.target.value
              )
            }
            ref={pin6Ref}
            onKeyUp={(e) =>
              e.code == "Backspace" ? pin5Ref.current.focus() : null
            }
            style={{
              borderColor: pin6Value ? "#6379F4" : "rgba(66, 63, 63, 0.4",
            }}
          />
        </div>

        <Link >
          <input
            type="button"
            value="Continue"
            className="transfer-btn"
            id="pin-btn"
            disabled={
              pin1Value &&
              pin2Value &&
              pin3Value &&
              pin4Value &&
              pin5Value &&
              pin6Value
                ? false
                : true
            }
            onClick={onTransfer}
          />
        </Link>
      </div>
    </div>
  );
};
