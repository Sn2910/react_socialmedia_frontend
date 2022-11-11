import React from 'react'
import '../onlinefriends/onlinefriends.css'

function OnlineFriends({user}) {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER
  return (
   
         <li className="rightbarFriendList">
            <div className="rightbarProfileImgContainer">
              <img src={pf + user.profilePicture} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
    
  )
}

export default OnlineFriends