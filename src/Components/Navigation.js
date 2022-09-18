import React from 'react'
import '../Styles/Navigation.css'

export default function Navigation() {
  return (
    <div className='nav-container'>
        <div className='nav-logo-container'>
            <div id='logonav'></div>
            runefy
        </div>
        <div className='nav-links-container'>
            <a className='nav-link first' href='https://github.com/diecolgar/runefy'>
                <div>code repo</div>
                <div className='githubicon'></div>
            </a>
        </div>
    </div>
  )
}
