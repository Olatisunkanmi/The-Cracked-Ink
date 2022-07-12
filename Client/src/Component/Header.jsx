import React from 'react'

import {Link } from 'react-router-dom'

const Header = () => {
  return (
    <div >
    
   
    <div className="container max-w-6xl mt-2 px-5 p-3 mx-auto text-center ">

      <Link to='/posts/' className='link'>
      
      <h2 className='text-5xl font-bold text-center'>Cracked Ink</h2>
      </Link>
            <p className='italic text-xl font-bold mt-2'>
            ...Read, Write 
            <span className='text-veryLightBrown '> and Read a little </span>
             bit More !</p>
    </div>

    </div>
  )
}

export default Header