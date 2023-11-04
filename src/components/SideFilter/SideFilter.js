import React from 'react'
import RangeSlider from './RangeSlider'

function SideFilter() {
  return (
    <div className='mt-5 font-jost ml-20'>
        <div className='p-5 border-b'>
            <div className='p-5 pb-0 font-extrabold'>
                Category Types
            </div>
            <div className='p-5 pb-0 w-80 text-gray-600  relative'>
                <input type='checkbox' className='mr-2' /> Tours <span className='text-sm text-gray-400 absolute right-0'>92</span>
            </div>
            <div className='p-5 pt-2 pb-0 w-80 text-gray-600  relative'>
                <input type='checkbox' className='mr-2' /> Attractions <span className='text-sm text-gray-400 absolute right-0'>45</span>
            </div>
            <div className='p-5 pt-2 pb-0 w-80 text-gray-600  relative'>
                <input type='checkbox' className='mr-2' /> Day Trips <span className='text-sm text-gray-400 absolute right-0'>21</span>
            </div>
            <div className='p-5 pt-2 pb-0 w-80 text-gray-600  relative'>
                <input type='checkbox' className='mr-2' /> Outdoor Activities <span className='text-sm text-gray-400 absolute right-0'>78</span>
            </div>
            <div className='p-5 pt-2 pb-0 w-80 text-gray-600  relative'>
                <input type='checkbox' className='mr-2' /> Concerts & Shows <span className='text-sm text-gray-400 absolute right-0'>679</span>
            </div>
        </div>
        <div className='p-5 border-b'>
            <div className='p-5 pt-2 pb-0 font-extrabold'>
                Other
            </div>
            <div className='p-5 pb-0 pt-2 w-80 text-gray-600  relative'>
                <input type='checkbox' className='mr-2' /> Free Cancellation <span className='text-sm text-gray-400 absolute right-0'>92</span>
            </div>
           
        </div>
        <div className='p-5 pt-2 border-b'>
            <div className='p-5 pt-2 pb-0 font-extrabold'>
                Price
            </div>
            <div className='p-5 pb-0 w-80 text-gray-600  relative'>
                $0 - $500
            <RangeSlider />
                
            </div>
           
        </div>
        <div className='p-5 border-b pt-2'>
            <div className='p-5 pb-0 pt-2 font-extrabold'>
                Rating 
            </div>
            <div className='p-5 pb-0 w-80 pt-2 text-gray-600  relative'>
                <input type='checkbox' className='mr-2' /> upto 2 stars <span className='text-sm text-gray-400 absolute right-0'>92</span>
            </div>
            <div className='p-5 pb-0 w-80 pt-2 text-gray-600  relative'>
                <input type='checkbox' className='mr-2' /> 3-4 stars <span className='text-sm text-gray-400 absolute right-0'>92</span>
            </div>
            <div className='p-5 pb-0 w-80 pt-2 text-gray-600  relative'>
                <input type='checkbox' className='mr-2' /> 5 stars <span className='text-sm text-gray-400 absolute right-0'>92</span>
            </div>
           
        </div>
        <div className='p-5 pt-2 border-b'>
            <div className='p-5 pt-2 pb-0 font-extrabold'>
                Languages
            </div>
            <div className='p-5 pt-2 pb-0 w-80 text-gray-600  relative'>
                <input type='checkbox' className='mr-2' /> English<span className='text-sm text-gray-400 absolute right-0'>92</span>
            </div>
            <div className='p-5 pt-2 pb-0 w-80 text-gray-600  relative'>
                <input type='checkbox' className='mr-2' /> Spanish <span className='text-sm text-gray-400 absolute right-0'>45</span>
            </div>
            <div className='p-5 pt-2 pb-0 w-80 text-gray-600  relative'>
                <input type='checkbox' className='mr-2' /> French<span className='text-sm text-gray-400 absolute right-0'>21</span>
            </div>
            <div className='p-5 pt-2 pb-0 w-80 text-gray-600  relative'>
                <input type='checkbox' className='mr-2' /> Turkish <span className='text-sm text-gray-400 absolute right-0'>78</span>
            </div>
           
        </div>
    </div>
  )
}

export default SideFilter