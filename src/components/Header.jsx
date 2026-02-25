import React from 'react'
import logo from '/logo.png'

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="Logo" />
      <h3>Website Heading</h3>
    </div>
  )
}

export default Header
