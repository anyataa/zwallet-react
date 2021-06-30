import React, { useReducer } from "react";
import { FaBorderAll, FaLongArrowAltUp } from "react-icons/fa";
import { Link, Redirect } from "react-router-dom";
import '../style/navBar.css'


export default function Dashboard() {
  
const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
function doLogOut()  {
  localStorage.removeItem("userData")
  forceUpdate()
  console.log('in dashboard')
  
}

  if  (!JSON.parse(localStorage.getItem('userData') )){
    console.log('in if')
    return <Redirect to='/login'/>
    
  }
  
  return (
    <div className="left">
      <div className="left-top">
        <Link style={{textDecoration:"none"}} to='/dashboard' >
        <div className="item-wrapper">
          <i className="label-size">
            <FaBorderAll></FaBorderAll>
          </i>
          <p className="label label-size">Dashboard</p>
        </div></Link>
        <Link style={{textDecoration:"none"}}  to='/transfer' >
        <div className="item-wrapper active">
          <i className="label-size">
            <FaLongArrowAltUp></FaLongArrowAltUp>
          </i>
          <p className="label label-size">Transfer</p>
        </div>
        </Link>
        <Link style={{textDecoration:"none"}} to='/topup' >
        <div className="item-wrapper">
          <i className="fas fa-plus label-size"></i>
          <p className="label label-size">Top Up</p>
        </div>
        </Link>
        <Link style={{textDecoration:"none"}} to='/profil' >

        <div className="item-wrapper">
          <i className="fas fa-user label-size"></i>
          <p className="label label-size">Profile</p>
        </div>
        </Link>
        
      </div>
      <div className="item-wrapper" onClick={doLogOut}>
        <img src="../assets/images/log-out.svg" alt="" />
        <p className="label">Logout</p>
      </div>
    </div>
  );
}
