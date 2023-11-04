import React, { useEffect, useState } from 'react'
import './PropertyList.css'
import {BsArrowUpRight,BsArrowDownUp} from 'react-icons/bs'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import Star from './Star.js'
import Pagination from './Pagination'

function PropertyList() {
    const [items,setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    const [isLoading,setIsLoading] = useState(true);
    
    
    let API = "https://tripweb.onrender.com/properties";
    const fetchApiData = async(url) => {
        try{
            const res = await fetch(url);
            const data  = await res.json();
            setIsLoading(false);
            setItems(data);
            console.log(data);
            
        }
        catch(error)
        {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchApiData(API);
    },[])
    
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = items.slice(firstPostIndex,lastPostIndex); 
   
    return (
       
        <div className='property-list-container p-5  w-2/3 '>
            <div className='font-jost p-10 text-gray-600 flex flex-row  justify-between'>
                <div><span className='property-details-title font-jost font-extrabold'>{items.length} properties</span> in Europe</div>
                <div>
                    <button className='sort-btn w-28 rounded-full p-3 relative ml-2'><BsArrowDownUp className='absolute ml-3 mt-1' /><span className='ml-3'>Sort</span> </button>
                </div>
            </div>

            
               
            { !isLoading ?
            
            items && currentPosts.map((items) => <div className='property-item p-5 border-t-2  flex gap-5'>
                <div className='property-image h-72 w-64  relative'>
                    <div className='h-8 w-8 rounded-full absolute bg-white top-5 right-3   items-center'><button className='p-2' ><AiOutlineHeart className='text-sm text-gray-400 '/></button></div>
                    <img src={items.image} className='h-64 w-64 rounded' />
                </div>
                <div className='property-details flex flex-row p-5  w-auto justify-between'>
                    <div className='w-2/3'>
                        <div className='property-details-subtitles font-jost'> 16+ hours * Full-day Tours</div>
                        <div className='property-details-title text-lg font-jost pl-0 p-2'>{items.title}</div>
                        <div className='property-details-description pl-0 p-1'>{items.description}</div>
                        <div className='property-details-subtitles font-jost'> {items.location}</div>
                        <div className='font-jost text-sm mt-3'>
                            Taking Safety measures
                        </div>
                        <div className='font-jost font-semibold text-sm text-green-600'>
                            Free Cancellation
                        </div>
                    </div>
                    <div className='right-0 text-right'>
                        <div className='stars'>
                            
                            <Star starReviews={items.starReviews} />
                        </div>
                        <div className='property-details-subtitles  font-jost'>
                            {items.totalReviews} reviews
                        </div>
                        <div className='property-details-subtitles  font-jost mt-16'>
                            From <br />
                            <span className='property-details-title text-xl font-extrabold'>US${items.price} </span><br />
                            per adult
                        </div>
                        <div className='mt-5 flex flex-row'>
                            <button className='detail-btn font-jost h-12 w-36 text-sm font-bold rounded text-white flex p-3 pl-8 '>
                                View Detail <BsArrowUpRight className='text-lg font-extrabold ml-2'/>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
            ) : <h1 className='text-4xl text-center p-5'>Loading Data...</h1> }
            <Pagination totalPosts={items.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                    </div>
    )
}

export default PropertyList