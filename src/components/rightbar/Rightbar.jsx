import React from 'react'
import '../rightbar/rightbar.css'
import { Users } from '../../dummyData'
import OnlineFriends from '../onlinefriends/OnlineFriends'

function Rightbar({profile}) {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthImg" />
          <span className="birthdayText">
            <b>Harish</b> and <b>3 other friends </b> have birthday today
          </span>
        </div>
        <img className="imgrightbarAd" src='/assets/ad.png' />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="onlineFriendLists">
          {Users.map((user) => (
            <OnlineFriends key={user.id} user={user} />
          ))}

        </ul>
      </>
    )

  }
  const ProfileRightbar =()=>{
    return(
      <>
        <h4 className='profileRightbarTitle'>User Information</h4>
        <div className="profileRightbarInfo">
          <div className="profileRightbarInfoItem">
             <span className="profileRightbarInfoKey">City:</span>
             <span className="profileRightbarInfoValue">New York</span>
          </div>
          <div className="profileRightbarInfoItem">
             <span className="profileRightbarInfoKey">From:</span>
             <span className="profileRightbarInfoValue">USA</span>
          </div>
          <div className="profileRightbarInfoItem">
             <span className="profileRightbarInfoKey">Relationship:</span>
             <span className="profileRightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className='profileRightbarTitle'>User Friends</h4>
        <div className="profileRightbarFollowings">
          <div className="profileRightbarfollowing">
            <img src={`${pf}person/1.jpeg`} alt="" className="followingsImg" />
            <span className="followingUsername">Gelbert</span>
          </div>
          <div className="profileRightbarfollowing">
            <img src={`${pf}person/1.jpeg`} alt="" className="followingsImg" />
            <span className="followingUsername">Gelbert</span>
          </div>
          <div className="profileRightbarfollowing">
            <img src={`${pf}person/1.jpeg`} alt="" className="followingsImg" />
            <span className="followingUsername">Gelbert</span>
          </div>
          <div className="profileRightbarfollowing">
            <img src={`${pf}person/1.jpeg`} alt="" className="followingsImg" />
            <span className="followingUsername">Gelbert</span>
          </div>
          <div className="profileRightbarfollowing">
            <img src={`${pf}person/1.jpeg`} alt="" className="followingsImg" />
            <span className="followingUsername">Gelbert</span>
          </div>
          <div className="profileRightbarfollowing">
            <img src={`${pf}person/1.jpeg`} alt="" className="followingsImg" />
            <span className="followingUsername">Gelbert</span>
          </div>
        </div>
      </>
    )
  
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/> }
      </div>
    </div>
  )
}

export default Rightbar