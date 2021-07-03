import React from 'react'
import Balance from './Balance'
import BalanceSeeAll from './BalanceSeeAll'

export default function BalanceContainer() {
    return (
        <div className='dashboard-top-up'>
            <div className="profile-page-container">
                <Balance>  </Balance>
                <BalanceSeeAll></BalanceSeeAll>
            </div>
          
        </div>
    )
}
