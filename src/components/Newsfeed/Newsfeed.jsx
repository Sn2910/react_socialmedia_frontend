import React, { useState, useEffect } from 'react'
import '../Newsfeed/newsfeed.css'
import Post from '../post/Post'
import Share from '../share/Share'
import axios from 'axios'


function Newsfeed({userId}) {
  const [posts,setPosts]=useState([])



  useEffect(()=>{
    const fetchPost= async ()=>{
      const response = userId ? await axios.get("/posts/" + userId) :await axios.get("posts/timeline/634fd75d62d4ddb34653f76f")
      setPosts(response.data)
    }
    fetchPost()
  },[userId])
  return (
    <div className='newsfeed'>
      <div className="newsfeedWrapper">
        <Share/>
         {posts.map((singlepost)=>
           <Post key = {singlepost._id} post= {singlepost}/>
        )} 
       
      </div>
    </div>
  )
}

export default Newsfeed