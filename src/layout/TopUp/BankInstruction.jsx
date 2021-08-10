import React from "react";
import { Accordion } from "react-bootstrap";

import { bankTransferInstruction } from "../../global/topUpConstants";
import { ShowVirtualAccountNumber } from "./showVirtualAccountNumber";

export const BankInstruction = () => {
  const bankInstruction = bankTransferInstruction;

  const renderBankInstruction = () => {
    return (
      <Accordion defaultActiveKey="0">
        {bankInstruction.map((item, index) => {
          return (
            <Accordion.Item eventKey={`${index}`} key={index}>
              <Accordion.Header>{item.methods}</Accordion.Header>
              <Accordion.Body>
                {item.steps.map((step, stepIndex) => (
                  <ul style={{ listStyle: "none" }}>
                    <li> {`${stepIndex + 1} . ${step}`}</li>
                  </ul>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  };

  return (
    <div className="right">
      {ShowVirtualAccountNumber(true)}
      {/* <div>ANYAAAA</div> */}
      <h4>Instruction</h4>
      <br />
      {renderBankInstruction()}
    </div>
  );
};
