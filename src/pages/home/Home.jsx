import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Newsfeed from '../../components/Newsfeed/Newsfeed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import '../home/Home.css'


function Home() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Newsfeed/>
        <Rightbar/>
      </div>

    </div>

  )
}

export default Home