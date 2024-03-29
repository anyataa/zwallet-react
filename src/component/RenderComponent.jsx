import React from "react";

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div
        className="modal-download print-container"
        style={{ display: this.props.show }}
      >
        {console.log(this.props)}
        <div className="pin-confirmation-box">
          {/* <div className="modal-close-icon-wrapper"> */}
          <ul>
            <li>
              <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
                <p className="transfer-secondary-text">Amount</p>
                <p className="transfer-primary-text">Sabaraha</p>
              </div>
            </li>
            <li>
              <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
                <p className="transfer-secondary-text">Notes</p>
                <p className="transfer-primary-text">Notes Transfernya Apa</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
