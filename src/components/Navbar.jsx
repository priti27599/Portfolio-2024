import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <header className='header'>
          <NavLink to="/" className="text-xl w-10 h-10 py-1 px-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
              <p className='blue-gradient_text'>Priti</p>
          </NavLink>
      </header>
  )
}

export default Navbar