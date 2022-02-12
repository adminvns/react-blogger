import React from 'react'
import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>

        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>LOGOUT</li>
            </ul></div>
        <div className='topRight'>
        <img className='topImage' src='https://images.ctfassets.net/23aumh6u8s0i/2pxitsliEwXLe6LhXYrcBB/e17a6246514c9e1724fe2129857310fb/thief-2' alt=''></img>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div></div>
  )
}
