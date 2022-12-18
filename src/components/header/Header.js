import React from 'react'
import Link from './Link'

function Header() {
  return (
    <div className='header'>
        <Link text="Home"/>
        <Link text="Meny"/>
        <Link text="Contact"/>
    </div>
  )
}

export default Header