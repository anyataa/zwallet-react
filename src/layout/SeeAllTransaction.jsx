import React from 'react'
import Dashboard from '../component/Dashboard'
import NavBar from '../component/NavBar'
import { Footer } from '../component/Footer'
import { BalanceTransaction } from '../component/Dashboard/BalanceTransaction'
import { SeeAllTransactionItem } from './SeeAllTransactionItem'


export const SeeAllTransaction = () => {
    return (
        <div className="container">
        <Dashboard />
        <div className="right ">
          <p style={{fontSize:'25px'}} className='col-grey'>Today</p>
        {/* <BalanceTransaction></BalanceTransaction> */}
        <SeeAllTransactionItem></SeeAllTransactionItem>
        </div>
 
        <NavBar />
        <Footer />
      </div>
    )
}
