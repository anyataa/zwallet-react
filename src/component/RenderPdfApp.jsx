import React, { useRef } from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";

import { ComponentToPrint } from "./RenderComponent";

export const RenderPdfApp = () => {
  const componentRef = useRef();
  const transfer = useSelector((state) => state.transfer);

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
      handlePrint();
      setIsPrint(!isPrint);
    } else {
      handlePrint();
      setLabel("Download");
      setShow("");
      setIsPrint(!isPrint);
    }
  };

  return (
    <div>
      <ComponentToPrint
        ref={componentRef}
        show={show}
        nominalTransfer={transfer.nominalTransfer}
        noteTransfer={transfer.noteTransfer}
      />
      {console.log(transfer)}
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
