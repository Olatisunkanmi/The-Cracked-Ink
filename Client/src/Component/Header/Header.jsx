import React from 'react'
import './Header.css'
import {Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container">

      <Link to='/posts/' className='link'>
      <h2 className='header--title'>Cracked Ink</h2>
      </Link>
            <p className='header--para'>...Read, Write and Read a little bit More</p>
    </div>
  )
}

export default Header