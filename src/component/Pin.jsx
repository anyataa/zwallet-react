import React, { useState } from 'react'
import Button from "../component/Button"
import { Link } from 'react-router-dom'


export const Pin = (props) => {

    const { setPinValue, onCreate } = props
   
    //   Pin control
    const [BorderColor, setBorderColor] = useState("rgba(66, 63, 63, 0.4")
    const [ButtonDisabled, setButtonDisabled] = useState(true)
    // const [PinValue, setPinValue] = useState("")
    const [PinTotal, setPinTotal] = useState([{
        value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null}])

        const validatePin = () => {
            console.log("in")
          // let pinUser='123456'
          // if (pinUser == PinValue ){
          //     console.log('true In')
          // } else {
          //     console.log("in")
          // }
        }
    

    const pinHandler = (e, index) => {
            if (e.target.value != null) {
              let current = PinTotal
              current[index]={value:e.target.value}
            //   console.log("current",current)
            //   console.log("pinTotal",current)
              setPinTotal(current)
              setBorderColor("#6379F4")
              let pin = PinTotal[0].value+PinTotal[1].value+PinTotal[2].value+PinTotal[3].value+PinTotal[4].value+PinTotal[5].value
            //   console.log(pin)
              if (pin.length==6){
                setPinValue(pin)
                // console.log("This is Pin Value:",PinValue)
                setButtonDisabled(false)
              } else {
                setButtonDisabled(true)
              }
            } 
          
          };

    return (
          <div style={{display: 'flex', flexDirection: 'column', paddingTop: '10%'}}>
          <div className="transfer-pin-input-wrapper" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '1rem'}}>
              {PinTotal.map((element, index) => { return  <input
              type="number"  
              class="transfer-input-pin"
              value={PinTotal.value}
                key={index}
                style={{borderColor:BorderColor}}
              onChange={e => pinHandler(e,index)}
            />})}
          </div>
          {/* <input
            type="button"
            value={props.buttonValue}
            class="transfer-btn"
            id="pin-btn"
            disabled={ButtonDisabled}
            // Pin Validation
            onclick
            ={e => validatePin()}
          /> */}
          {/* <Link to={props.goTo}>  */}
          <Button disabled={ButtonDisabled} onClick={onCreate}>{props.buttonValue}</Button>
          {/* </Link> */}
          
          <br/>
          <br/>
          </div>
    )
}

export default Pin
