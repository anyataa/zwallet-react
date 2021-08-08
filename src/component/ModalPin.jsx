import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useReducer } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useRouteMatch } from "react-router-dom";
import { updateAccountBalance } from "../actions";
import { urlAPI } from "../asset/urls";
import { pinHandler, setTransactionData } from "../global";

export const ModalPin = ({ modalToggle, setModalToggle }) => {
  //   Pin control
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
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
  const [pin, setPin] = useState("");
  const [data, setData] = useState([]);
  const [transferData, setTransferData] = useState([]);
  // const [user, setAccountData] = useState({});
  const [message, setMessage] = useState("");

  const user = useSelector((state) => state.user);
  
  const dispatch = useDispatch()

  useEffect(() => {
    setTransferData(JSON.parse(localStorage.getItem("transfer-data")));
  }, []);

  const onTransfer = () => {
    if (transferData && user) {
      console.log("pin", PinValue);
      var body = {
        //==================== Pin Data Where ========================
        transactionAmount: transferData.nominalTransfer,
        transactionNotes: transferData.noteTransfer,
        fromAccountId: user.accountId,
        toUserId: transferData.id,
        userPin: PinValue,
      };
      axios
        .post(urlAPI + "/transaction/transfer", body)
        .then((res) => {
          console.log(res);
          if (res.data.message.includes("Sorry")) {
            setMessage(res.data.message);
            // redirectTo(0);
            console.log(redirectTo(0));
            return;
          } else if (res.data.message.includes("Success")) {
            redirectTo(1);
            
            dispatch(updateAccountBalance(res.data.data.fromAccountBalance))
            
            setTransactionData(user.accountId);
            setMessage("");
            // forceUpdate();
            setModalToggle();
            return;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log("transfer in", transferData.id);
  };

  const [BorderColor, setBorderColor] = useState("rgba(66, 63, 63, 0.4");
  const [ButtonDisabled, setButtonDisabled] = useState(true);
  const [PinValue, setPinValue] = useState("");
  const [PinTotal, setPinTotal] = useState(() => [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ]);

  const validatePin = () => {
    let pinUser = "123456";
    let pinInput =
      pin1Value + pin2Value + pin3Value + pin4Value + pin5Value + pin6Value;
    if (pinUser == pinInput) {
      console.log("masuk", pin);
    } else {
      console.log("no", pin);
    }
  };

  const redirectTo = (isError) => {
    let pinInput =
      pin1Value + pin2Value + pin3Value + pin4Value + pin5Value + pin6Value;
    setPinValue(pinInput);
    console.log(PinValue);
    if (isError == 1) {
      return "/transfer/status/failed";
    } else if (isError == 0) {
      return "/transfer/status/success";
    }
  };

  const pinHandler = (e, index) => {
    if (e.target.value != null) {
      let current = PinTotal;
      current[index] = { value: e.target.value };
      setPinTotal(current);
      setBorderColor("#6379F4");
      let pin =
        PinTotal[0].value +
        PinTotal[1].value +
        PinTotal[2].value +
        PinTotal[3].value +
        PinTotal[4].value +
        PinTotal[5].value;
      //   console.log(pin)
      if (pin.length == 6) {
        setPinValue(pin);
        setButtonDisabled(false);
        console.log("pin Valueee", PinValue);
      } else {
        setButtonDisabled(true);
      }
    }
  };

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

        <Link to={redirectTo}>
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
