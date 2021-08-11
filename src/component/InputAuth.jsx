import React from 'react'
import { BsLockFill, BsPeopleCircle } from 'react-icons/bs'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'
import '../style/inputAuth.css'

const InputAuth = ({type, value, placeholder, onChange, password, ifClicked, isVisible, onKeyUp, phone}) => {
  const changeColor = () => {
    if(value){
      return '#6379F4'
    }else{
      return 'rgba(169, 169, 169, 0.6)'
    }
  }
  return (
    <div className='input-box' style={{borderBottomColor: changeColor()}}>
      {
        type == 'email' ? <HiMail style={styles.icon} color={changeColor()}/> : type == 'password' || password ? <BsLockFill style={styles.icon} color={changeColor()}/> : phone ? <FiPhone style={styles.icon} color={changeColor()}/> : <BsPeopleCircle style={styles.icon} color={changeColor()}/>
      }
      {
        phone ? <p style={{margin: '5px', fontWeight: 600, color: '#3A3D42'}}>+62</p> : null
      }
      <input className='input' type={type} placeholder={placeholder} value={value} onChange={onChange} onKeyUp={onKeyUp}/>
      {
        password ?
        (
          isVisible ?
          <AiOutlineEye onClick={ifClicked} color={changeColor()}/>
          :
          <AiOutlineEyeInvisible onClick={ifClicked} color={changeColor()}/>
        )
        :
        null
      }
    </div>
  )
}

const styles = {
  icon: {
    margin: '5px',
    fontSize: '20px'
  }
}

export default InputAuth
