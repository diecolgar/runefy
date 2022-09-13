import React from 'react'
import '../Styles/Navigation.css'

export default function Navigation() {
  return (
    <div className='nav-container'>
        <div className='nav-logo-container'>runify</div>
        <div className='nav-links-container'>
            <div className='nav-link first'>link1</div>
            <div className='nav-link second'>link2</div>
            <div className='nav-link third'>link3</div>
            <div className='nav-link fourth'>link4</div>
        </div>
    </div>
  )
}
