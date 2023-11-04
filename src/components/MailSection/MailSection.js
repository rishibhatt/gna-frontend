import React from 'react'
import './MailSection.css'
import {BiMailSend} from 'react-icons/bi'
const MailSection = () => {
  return (
    <div className='mail-container h-40 flex p-5  '>
        <div className='p-5 ml-20'>
            <BiMailSend className='mail-icon mt-2 h-20 w-20 text-white '/>
        </div>
        <div className='font-jost text-white p-5  mt-5 text-2xl'>
            Your Travel Journey Starts Here <br />
            <span className='text-base'>Sign Up and we'll send the best details to you</span>
        </div>
        <div className='p-5 mt-3 ml-32 '>
            <input className='mail-input font-jost p-5 w-96 rounded' placeholder='Your Email' />
            <button className='mail-btn font-jost text-white p-5 w-40 rounded ml-3'>Subscribe</button>
        </div>
    </div>
  )
}

export default MailSection