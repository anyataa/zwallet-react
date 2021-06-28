import React, { Component } from 'react'
import Dashboard from '../component/Dashboard'
import BalanceContainer from '../component/BalanceContainer'
import NavBar from '../component/NavBar'
import Footer from './LandingPage/Footer'

export default class  BalanceLayout extends Component {
    render() {
        return (
            <div>
                <Dashboard />
                <BalanceContainer/>
                <NavBar />
                <Footer />
            </div>
        )
    }
}
