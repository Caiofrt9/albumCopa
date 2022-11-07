import React from 'react'

import { NavLink, Link } from 'react-router-dom'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav id="nav">
      <Link to="/">
        <AiOutlineHome />
      </Link>
    </nav>
  )
}

export default Navbar
