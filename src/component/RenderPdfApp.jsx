import React, { useRef } from "react";
import { useReducer } from "react";
import { useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Footer } from "./Footer";
import NavBar from "./NavBar";
import { ComponentToPrint } from "./RenderComponent";
import { TransferConfirmation } from "./TransferConfirmation";

export const RenderPdfApp = () => {
  const componentRef = useRef();

  const [isPrint, setIsPrint] = useState(false);
  const [label, setLabel] = useState("Download PDF");
  const [show, setShow] = useState("none");
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrintOut = () => {
    if (isPrint) {
      setShow("none");
      setLabel("Download");
      setIsPrint(!isPrint);
    } else {
      handlePrint();
      setLabel("Close");
      setShow("");
      setIsPrint(!isPrint);
    }
  };

  return (
    <div>
      <ComponentToPrint ref={componentRef} show={show} />
      <button className="modal-button " onClick={handlePrintOut}>
        {label}
        <img
          src={require("../asset/image/images/download.svg").default}
          alt=""
        />{" "}
      </button>
    </div>
  );
};
