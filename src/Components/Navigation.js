import React from 'react'
import '../Styles/Navigation.css'

export default function Navigation() {
  return (
    <div className='nav-container'>
        <div className='nav-logo-container'>runify</div>
        <div className='nav-links-container'>
            <div className='nav-link first'>about</div>
            <div className='nav-link second'>git</div>
        </div>
    </div>
  )
}
