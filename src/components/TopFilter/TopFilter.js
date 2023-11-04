import React from 'react';
import './TopFilter.css';
import { CiLocationOn,CiCalendarDate } from 'react-icons/ci';
import {LiaCompass} from 'react-icons/lia';
import {BsSearch} from 'react-icons/bs'

function TopFilter() {
  return (
    
    <div className='top-filter-container p-5 pb-16 border-b-2 font-jost'>
    <div className='top-filter-tag text-3xl font-bold p-3 text-center'>
        Tours in London
    </div>
    <div className='filter-input flex flex-row bg-white  p-5 w-3/4 items-center justify-between'>
        <div className='flex flex-col  '>
            <div className='flex flex-row'>
            <CiLocationOn className='text-gray-600 text-xl mt-0.5' />
            <label className='font-semibold ml-1'> Location</label>
            </div>
            <div className='p-3'>
            <input className='ml-1 w-52 p-1' placeholder='Where are you going?' />
            </div>
             
        </div>
        <div className='flex flex-col border-l-2'>
            <div className='flex flex-row ml-2'>
            <CiCalendarDate className='text-gray-600 text-xl ml-4 mt-0.5' />
            <label className='font-semibold ml-1'> Check-in Check-out</label>
            </div>
            <div className='p-3 ml-4'>
            <input className='ml-1 p-1 text-gray-500' value="2017-06-01" type='date' placeholder='Where are you going?' />
            </div>
            
        </div>
        <div className='flex flex-col border-l-2'>
            <div className='flex flex-row ml-2'>
            <LiaCompass className='text-gray-600 text-xl ml-4 mt-0.5' />
            <label className='font-semibold ml-1'> Tour Type</label>
            </div>
            <div className='p-3 ml-4'>
            <input className='ml-1 p-1 text-gray-500'  placeholder='2 adults - 1 children - 1 room' />
            </div>
            
        </div>
        <div className='search-btn px-14 py-8 gap-2 flex flex-row text-white'>
            <BsSearch className='mt-1' />
            <button className=''>Search</button>
        </div>

    </div>
    </div>
  )
}

export default TopFilter