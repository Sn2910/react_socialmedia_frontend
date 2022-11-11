import React from 'react'
import '../friends/friends.css'

function Friends({user}) {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className="sidebarFriend">
    <img src={pf + user.profilePicture} alt="" className="sidebarFriendImg" />
    <span className="sidebarFriendName">{user.username}</span>
</li>
  )
}

export default Friends