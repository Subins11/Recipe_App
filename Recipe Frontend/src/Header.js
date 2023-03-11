import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='nav'>
  
      <Typography variant='h4'>My <span>ReCiPe</span></Typography>
      <ul className='nav-menu'>
      <Link style={{color:"white"}} to="/">Home</Link>
      <Link style={{color:"white"}} to="/">Indian</Link>
      <Link style={{color:"white"}} to="/Addrecipe">Add Recipe</Link>
     </ul>
    </div>

  )
}

export default Header
