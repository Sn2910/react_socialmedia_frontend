import React from 'react'
import '../sidebar/sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from '../../dummyData';
import Friends from '../friends/Friends';
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                  <RssFeedIcon className='sidebarIcon'/>
                  <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                  <ChatIcon className='sidebarIcon'/>
                  <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                  <PlayCircleFilledIcon className='sidebarIcon'/>
                  <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                  <GroupsIcon className='sidebarIcon'/>
                  <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                  <BookmarkIcon className='sidebarIcon'/>
                  <span className="sidebarListItemText">BookMarks</span>
                </li>
                <li className="sidebarListItem">
                  <HelpIcon className='sidebarIcon'/>
                  <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                  <WorkIcon className='sidebarIcon'/>
                  <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                  <CalendarMonthIcon className='sidebarIcon'/>
                  <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                  <SchoolIcon className='sidebarIcon'/>
                  <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className='sidebarHr' />
              <ul className="sidebarFriendList">
              {Users.map((user)=>(
             <Friends key={user.id} user ={user} />
         ))}
          
              </ul>
        </div>
    </div>
  )
}

export default Sidebar