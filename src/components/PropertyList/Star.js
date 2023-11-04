import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
const Star = ({starReviews}) => {
   
    const ratingStar = Array.from({length:5} , (elem,index) => {
       return( 
       <span key = {index} >
        {
            starReviews >= index+1 ? ( <AiFillStar className='' />) : (<AiOutlineStar />)
        }

    </span>)
    });
  return (
    <div className='flex flex-row text-yellow-400  justify-end'>
      {ratingStar}
        
    </div>
    
  )
}

export default Star