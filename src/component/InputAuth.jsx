import React from 'react'
import { BsLockFill, BsPeopleCircle } from 'react-icons/bs'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'
import '../style/inputAuth.css'

const InputAuth = ({type, value, placeholder, onChange, password, ifClicked, isVisible, onKeyUp}) => {

  return (
    <div className='input-box'>
      {
        type == 'email' ? <HiMail/> : type == 'password' || password ? <BsLockFill/> : <BsPeopleCircle/>
      }
      <input className='input' type={type} placeholder={placeholder} value={value} onChange={onChange} onKeyUp={onKeyUp}/>
      {
        password ?
        (
          isVisible ?
          <AiOutlineEye onClick={ifClicked}/>
          :
          <AiOutlineEyeInvisible onClick={ifClicked}/>
        )
        :
        null
      }
    </div>
  )
}

export default InputAuth
