import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { branchAgentTransferInstruction } from "../../global/topUpConstants";
import { ShowVirtualAccountNumber } from "./showVirtualAccountNumber";

export const BankBranchAgentInstruction = () => {
  const bankBranchAgentInstruction = branchAgentTransferInstruction;

  const renderBankBranchAgentInstruction = () => {
    return (
      <Accordion defaultActiveKey="0">
        {bankBranchAgentInstruction.map((item, index) => {
          return (
            <Accordion.Item eventKey={`${index}`}>
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
      <h1>How to Top Up</h1>
      <br />
      <h4>Instruction</h4>
      <br />
      {renderBankBranchAgentInstruction()}
    </div>
  );
};
