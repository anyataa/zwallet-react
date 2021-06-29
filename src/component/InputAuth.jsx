import React from 'react'
import { BsLockFill, BsPeopleCircle } from 'react-icons/bs'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'
import '../style/inputAuth.css'

const InputAuth = ({type, value, placeholder, onChange, password, ifClicked, isVisible, onKeyUp, phone}) => {

  return (
    <div className='input-box'>
      {
        type == 'email' ? <HiMail/> : type == 'password' || password ? <BsLockFill/> : phone ? <FiPhone/> : <BsPeopleCircle/>
      }
      {
        phone ? <p>+62</p> : null
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
