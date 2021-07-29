import React, { useReducer } from "react";
import { FaBorderAll, FaLongArrowAltUp, FaPlus, FaUserAlt } from "react-icons/fa";
import { Link, Redirect, useRouteMatch } from "react-router-dom";
import '../style/navBar.css'


export default function Dashboard() {
  
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const { path, url } = useRouteMatch()
console.log(useRouteMatch())
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
        <div className={path == '/dashboard' ? "item-wrapper active" : "item-wrapper"}>
            <FaBorderAll className="label-size"/>
          <p className="label label-size">Dashboard</p>
        </div></Link>
        <Link style={{textDecoration:"none"}}  to='/transfer' >
        <div className={path == '/transfer' ? "item-wrapper active" : "item-wrapper"}>
          <FaLongArrowAltUp className="label-size"/>
          <p className="label label-size">Transfer</p>
        </div>
        </Link>
        <Link style={{textDecoration:"none"}} to='/topup' >
        <div className={path == '/topup' ? "item-wrapper active" : "item-wrapper"}>
          <FaPlus className="label-size"/>
          <p className="label label-size">Top Up</p>
        </div>
        </Link>
        <Link style={{textDecoration:"none"}} to='/profil' >

        <div className={path == '/profil' ? "item-wrapper active" : "item-wrapper"}>
          <FaUserAlt className="label-size"/>
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
