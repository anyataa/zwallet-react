import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import SuccessLogo from "../asset/image/images/success.svg";

// export class ComponentToPrint extends React.PureComponent {
//   render() {
//     return (
//       <div
//         className="modal-download print-container"
//         // style={{ display: this.props.show }}
//       >
//         {/* <div className="transfer-right-top">
//           <img src={SuccessLogo} alt="" className="success-failed-image" />
//           <p className="transfer-primary-text">"Transfer Success"</p>
//         </div> */}
//         {console.log(this.props)}
//         <div className="pin-confirmation-box">
//           {/* <div className="modal-close-icon-wrapper"> */}
//           <ul>
//             <li>
//               <div className="center">
//                 <img
//                   src={SuccessLogo}
//                   alt=""
//                   className="success-failed-image"
//                 />
//                 <p>Transfer Success</p>
//               </div>
//             </li>
//             <li>
//               <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
//                 <p className="transfer-secondary-text">Amount</p>
//                 <p className="transfer-primary-text">
//                   {this.props.nominalTransfer}
//                 </p>
//               </div>
//             </li>
//             <li>
//               <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
//                 <p className="transfer-secondary-text">Notes</p>
//                 <p className="transfer-primary-text">
//                   {this.props.nominalTransfer}
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     transfer: state.transfer,
//   };
// };

// export default connect(mapStateToProps)(ComponentToPrint);

const ComponentToPrint = (props) => {
  const transfer = useSelector(state => state.transfer)
  useEffect(() => {
    window.print()
  }, [])
  return (
    <div
      className="modal-download print-container"
      // style={{ display: this.props.show }}
    >
      {/* <div className="transfer-right-top">
        <img src={SuccessLogo} alt="" className="success-failed-image" />
        <p className="transfer-primary-text">"Transfer Success"</p>
      </div> */}
      {console.log(props)}
      <div className="pin-confirmation-box">
        {/* <div className="modal-close-icon-wrapper"> */}
        <ul>
          <li>
            <div className="center">
              <img
                src={SuccessLogo}
                alt=""
                className="success-failed-image"
              />
              <p>Transfer Success</p>
            </div>
          </li>
          <li>
            <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
              <p className="transfer-secondary-text">Amount</p>
              <p className="transfer-primary-text">
                {props.nominalTransfer}
              </p>
            </div>
          </li>
          <li>
            <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
              <p className="transfer-secondary-text">Notes</p>
              <p className="transfer-primary-text">
                {props.nominalTransfer}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ComponentToPrint;
