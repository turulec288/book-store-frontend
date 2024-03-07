import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom';
const BackButton = ({destination= "/"}) => {
  return (
    <div className='flex'>
            <Link 
                to={destination}
                className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
            
            <BiArrowBack className='text-2x1'/>
            </Link>
      
    </div>
  )
}

export default BackButton