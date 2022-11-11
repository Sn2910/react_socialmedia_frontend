import React, { useState, useEffect }from 'react'
import Navbar from '../../components/navbar/Navbar'
import Newsfeed from '../../components/Newsfeed/Newsfeed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import '../profile/profile.css'
import axios from 'axios'

function Profile() {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER
  const [user,setUser]=useState({})
  useEffect(()=>{
    const fetchUsers= async ()=>{
      const response = await axios.get(`/users?username=jane`)
      setUser(response.data)
    }
    fetchUsers()
  },[]) 

  return (
    <div>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRightbar">
          <div className="profileRightbarTop">
            <div className="profileCover">
              <img src={`${pf}post/3.jpeg`} className="profileCoverPicture" />
              <img src={`${pf}person/3.jpeg`} className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileUsername">{user.username}</h4>
              <span className="profileUserdesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightbarBottom">
            <Newsfeed userId ="634fd75d62d4ddb34653f76f" />
            <Rightbar profile/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile