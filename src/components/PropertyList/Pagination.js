import React from 'react'

const Pagination = ({totalPosts,postsPerPage,setCurrentPage, currentPage}) => {
    let pages = [];
    

    for(let i =1; i<= Math.ceil(totalPosts/postsPerPage) ; i++)
    {
        pages.push(i)
    }
  return (
    <div className='pagination w-full border-t p-3 rounded-lg flex justify-center  '>
  
      <span className='p-2'>Pages :- </span> {
            pages.map((page,index) => {
                const stylePage = page == currentPage ? 'border-2 border-white rounded-full h-10 w-10 bg-blue-800 text-white p-2 text-center mx-5' : 'border rounded-full h-10 w-10 bg-white border-blue-800 text-blue-500 p-2 text-center mx-5'
                return <button key={index} onClick={() => setCurrentPage(page)} className= {stylePage} >{page} </button>
            })
        }
        
        
    </div>
  )
}

export default Pagination