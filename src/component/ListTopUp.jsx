import React from 'react'

const ListTopUp = (props) => {
    const {number, statement} = props;

    return (
        <div className="card-notification">
            <div className= "col-secondary"> 
            {number}
            </div>
            <div className="col-grey">
            {statement}
            </div>
        </div>
    )
}

export default ListTopUp
