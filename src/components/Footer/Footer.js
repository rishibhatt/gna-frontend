import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container font-jost p-14 flex flex-row gap-52'>
        <div>
            <ul className=''>
                <li className='p-3 font-extrabold'>Contact Us</li>
                <li className='p-2 text-gray-500 text-xs'>
                    Toll Free Customer Care
                </li>
                <li className='p-2 text-blue-700'> +(1)123 456 789</li>
            </ul>
        </div>
        <div>
            <ul className=''>
                <li className='p-3 font-extrabold'>Company</li>
                <li className='p-2 text-gray-500 text-sm'>
                    About Us
                </li>
                <li className='p-2 text-gray-500'> Careers</li>
            </ul>
        </div>
        <div>
            <ul className=''>
                <li className='p-3 font-extrabold'>Support</li>
                <li className='p-2 text-gray-500 text-sm'>
                    Contact
                </li>
                <li className='p-2 text-gray-500 text-sm'> Legal Notice</li>
            </ul>
        </div>
        <div>
            <ul className=''>
                <li className='p-3 text-sm font-extrabold'>Other Services</li>
                <li className='p-2 text-gray-500 text-sm'>
                    Car hire
                </li>
                <li className='p-2 text-sm text-gray-500'> Activity Finder</li>
            </ul>
        </div>
        <div>
            <ul className=''>
                <li className='p-3 font-extrabold'>Mobile</li>
                <li className='p-2 text-gray-500 text-sm'>
                    About Us
                </li>
                <li className='p-2 text-gray-500'> Careers</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer