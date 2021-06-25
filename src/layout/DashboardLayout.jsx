import React, { Component } from 'react'
import BalanceContainer from '../component/BalanceContainer'
import "../style/global.css";
import Dashboard from '../component/Dashboard';
import { Footer } from '../component/Footer';
import NavBar from '../component/NavBar';




export default class DashboardLayout extends Component {
    render() {
        return (
            <div className='container' >
                <Dashboard />
                <BalanceContainer/>
                <NavBar />
                <Footer />
            </div>
        )
    }
}
