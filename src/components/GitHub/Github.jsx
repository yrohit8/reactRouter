import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Github = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/yrohit8")
        .then(res=>res.json())
        .then((res)=>setData(res))
    }, [])
  return (
    
    <>
    <div className='p-10 text-center'>
        <Link
        to="https://github.com/yrohit8"
        className=" text-gray-800 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
    >
        GitHub
    </Link>
    
    </div>
    <div className='flex items-center justify-center' >
     <img class='p-5 rounded-full w-96 h-96 max-w-lg transition-all duration-300 blur-sm hover:blur-none filter grayscale hover:grayscale-0' src={data.avatar_url} alt ="Git Picture" />
    </div>
    </>

    
  )
}
