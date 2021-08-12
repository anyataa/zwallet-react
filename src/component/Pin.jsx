import React from "react";
import Button from "../component/Button";
import PinInput from "react-pin-input";

export const Pin = ({
  setPinValue,
  onClick,
  buttonValue,
  pinValue,
  errMessage,
}) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", paddingTop: "10%" }}
    >
      <div
        className="transfer-pin-input-wrapper"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <PinInput
          length={6}
          onChange={(e) => setPinValue(e)}
          type="numeric"
          style={{ padding: "10px" }}
          inputStyle={{
            borderColor: "rgba(66, 63, 63, 0.4)",
            borderRadius: "10px",
            height: "65px",
            width: "53px",
            fontSize: "30px",
            fontWeight: "bold",
            margin: "0 5px",
          }}
          inputFocusStyle={{ borderColor: "#6379F4" }}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />
      </div>
      <p className="col-red" style={{ marginLeft: "45%" }}>
        {errMessage}
      </p>
      <Button disabled={pinValue.length == 6 ? false : true} onClick={onClick}>
        {buttonValue}
      </Button>
      <br />
      <br />
    </div>
  );
};

export default Pin;
