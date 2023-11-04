import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header-container w-full text-white flex p-5 items-center justify-between'>
        <div className='logo text-2xl '>TripWeb</div>
        <div className='header-items item-center w-auto gap-10 text-sm flex flex-row'>
            <div>
                <button>Home</button>
            </div>
            <div>
                <button className='text-blue-500'>Categories</button>
            </div>
            <div>
                <button>Destinations</button>
            </div>
            <div>
                <button>Blog</button>
            </div>
            <div>
                <button>Pages</button>
            </div>
            <div>
                <button>Dashboard</button>
            </div>
            <div>
                <button>Contact</button>
            </div>
           
        </div>
        <div className='header-btn w-1/4 flex flex-row gap-6'>
            <div className=''>
                <button className='expert-btn bg-white text-black text-xs px-8 py-4 rounded'>Become An Expert</button>
            </div>
            <div>
                <button className='border bg-inherit text-white text-xs px-8 py-4 rounded'>Sign In / Register</button>
            </div>
        </div>
    </div>
  )
}

export default Header