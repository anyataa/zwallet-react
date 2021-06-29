import React from 'react'
import Dashboard from '../component/Dashboard'
import NavBar from '../component/NavBar'
import { Footer } from '../component/Footer'
import { BalanceTransaction } from '../component/BalanceTransaction'


export const SeeAllTransaction = () => {
    return (
        <div className="container">
        <Dashboard />
        <div className='right'>
        <BalanceTransaction></BalanceTransaction>
        </div>
 
        <NavBar />
        <Footer />
      </div>
    )
}
