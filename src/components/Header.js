import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useThemeContext } from '../contexts/ThemeContext'

const Header = () => {
   const {theme, toggleTheme}= useThemeContext()
  return (
    <header>
        <button onClick={toggleTheme}> 
            Current Theme is {theme}
        </button>
        <Link to={'/'}>Main Page</Link>
        <Link to={'/create'}>Create Page</Link>
    </header>
  )
}

export default Header