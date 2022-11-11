import React from 'react'
import '../navbar/navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbarContainer'>
            <div className="navbarLeft">
                <Link to='/' style={{textDecoration:"none"}}>
                    <span className="logo">SnehaSocial</span>
                </Link>            </div>
            <div className="navbarCenter">
                <div className="searchbar">
                    <SearchIcon className='searchIcon' />
                    <input placeholder='Search for friends, posts or videos....' className="searchInput" />
                </div>
            </div>
            <div className="navbarRight">
                <div className="navbarLinks">
                    <span className="navLink">Hompage</span>
                    <span className="navLink">Timeline</span>
                </div>
                <div className="navbarIcons">
                    <div className="navbarIconItem">
                        <PersonIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="navbarIconItem">
                        <ChatIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="navbarIconItem">
                        <NotificationsIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src='/assets/person/1.jpeg' className='navbarImg'/>
            </div>
        </div>
    )
}

export default Navbar