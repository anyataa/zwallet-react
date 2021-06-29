import React, { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { pinHandler } from "../global";

export const ModalPin = ({modalToggle, setModalToggle}) => {
  //   Pin control

  const UseFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}
  
    return [ htmlElRef,  setFocus ] 
  }

  const [input1, setInput1Focus] = UseFocus()
  const [input2, setInput2Focus] = UseFocus()
  const [input3, setInput3Focus] = UseFocus()
  const [input4, setInput4Focus] = UseFocus()
  const [input5, setInput5Focus] = UseFocus()
  const [input6, setInput6Focus] = UseFocus()


  const [BorderColor, setBorderColor] = useState("rgba(66, 63, 63, 0.4");
  const [ButtonDisabled, setButtonDisabled] = useState(true);
  const [PinValue, setPinValue] = useState("");
  const [PinTotal, setPinTotal] = useState([
    {
      value: null,
    },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ]);


  const validatePin = () => {
    console.log("in");
    let pinUser='123456'
    if (pinUser == PinValue ){
        console.log('true In')
    } else {
        console.log("in")
    }
  };

  const pinHandler = (e, index) => {
    if (e.target.value != null) {
      let current = PinTotal;
      current[index] = { value: e.target.value };
      //   console.log("current",current)
      //   console.log("pinTotal",current)
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
        console.log("This is Pin Value:", PinValue);
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }
  };

  const renderPinInput = () => {
    
    PinTotal.map((element, index) => {
      return (
        <input
          type="number"
          className="transfer-input-pin"
          value={PinTotal.value}
          key={index}
          style={{ borderColor: BorderColor }}
          onChange={(e) => pinHandler(e, index)}
        />
      );
    })
  }

  
  return (
    // set display to flex for debugging
    <div id="modal" style={{ display: modalToggle ? "flex" : 'none' }}>
      <div className="pin-confirmation-box">
        <div className="modal-close-icon-wrapper">
          <p className="transfer-primary-text">Enter PIN to Transfer</p>
          <FaTimes className="modal-close-icon" onClick={setModalToggle}/>
        </div>
        <p className="transfer-secondary-text">
          Enter your 6 digits PIN for confirmation to <br />
          continue transferring money.
        </p>
        <div className="transfer-pin-input-wrapper">
          {PinTotal.map((element, index) => {
            return (
              <input
                type="number"
                className="transfer-input-pin"
                value={PinTotal.value}
                key={index}
                style={{ borderColor: BorderColor }}
                onChange={(e) => pinHandler(e, index)}
              />
            );
          })}
        </div>
        {/* <input type='text' value={PinValue} onChange={e => console.log(e.nativeEvent.path[9].focus)}/> */}
        <input
          type="button"
          value="Continue"
          className="transfer-btn"
          id="pin-btn"
          // disabled={ButtonDisabled}
          // Pin Validation
          onClick={validatePin}
        />
      </div>
    </div>
  );





  // const [BorderColor, setBorderColor] = useState("rgba(66, 63, 63, 0.4");
  // const [ButtonDisabled, setButtonDisabled] = useState(true);
  // const [PinValue, setPinValue] = useState("");
  // const [PinTotal, setPinTotal] = useState([
  //   {
  //     value: null,
  //   },
  //   { value: null },
  //   { value: null },
  //   { value: null },
  //   { value: null },
  //   { value: null },
  // ]);


  // const validatePin = () => {
  //   console.log("in");
  //   let pinUser='123456'
  //   if (pinUser == PinValue ){
  //       console.log('true In')
  //   } else {
  //       console.log("in")
  //   }
  // };

  // const pinHandler = (e, index) => {
  //   if (e.target.value != null) {
  //     let current = PinTotal;
  //     current[index] = { value: e.target.value };
  //     //   console.log("current",current)
  //     //   console.log("pinTotal",current)
  //     setPinTotal(current);
  //     setBorderColor("#6379F4");
  //     let pin =
  //       PinTotal[0].value +
  //       PinTotal[1].value +
  //       PinTotal[2].value +
  //       PinTotal[3].value +
  //       PinTotal[4].value +
  //       PinTotal[5].value;
  //     //   console.log(pin)
  //     if (pin.length == 6) {
  //       setPinValue(pin);
  //       console.log("This is Pin Value:", PinValue);
  //       setButtonDisabled(false);
  //     } else {
  //       setButtonDisabled(true);
  //     }
  //   }
  // };

  

  // return (
  //   // set display to flex for debugging
  //   <div id="modal" style={{ display: modalToggle ? "flex" : 'none', position: "absolute" }}>
  //     {/* {console.log(props)} */}
  //     <div className="pin-confirmation-box">
  //       <div className="modal-close-icon-wrapper">
  //         <p className="transfer-primary-text">Enter PIN to Transfer</p>
  //         <FaTimes className="modal-close-icon" onClick={setModalToggle}/>
  //       </div>
  //       <p className="transfer-secondary-text">
  //         Enter your 6 digits PIN for confirmation to <br />
  //         continue transferring money.
  //       </p>
  //       <div className="transfer-pin-input-wrapper">
  //         {PinTotal.map((element, index) => {
  //           return (
  //             <input
  //               type="number"
  //               className="transfer-input-pin"
  //               value={PinTotal.value}
  //               key={index}
  //               style={{ borderColor: BorderColor }}
  //               onChange={(e) => pinHandler(e, index)}
  //             />
  //           );
  //         })}
  //       </div>
  //       {/* <input type='text' value={PinValue} onChange={e => console.log(e.nativeEvent.path[9].focus)}/> */}
  //       <input
  //         type="button"
  //         value="Continue"
  //         className="transfer-btn"
  //         id="pin-btn"
  //         // disabled={ButtonDisabled}
  //         // Pin Validation
  //         onClick={validatePin}
  //       />
  //     </div>
  //   </div>
  // );
};
