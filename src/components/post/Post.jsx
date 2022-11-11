import React, { useState,useEffect } from 'react'
import '../post/post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { format} from 'timeago.js';
import {Link} from 'react-router-dom'     
function Post({post}) {
    const [likecount, setLikeCountount]= useState(post.likes.length)
    const [isLiked, setIsLiked]= useState(false)
    const[user,setUser] = useState({})
    const pf = process.env.REACT_APP_PUBLIC_FOLDER
  console.log(user)
  useEffect(()=>{
    const fetchUsers= async ()=>{
      const response = await axios.get(`/users?userId=${post.userId}`)
      setUser(response.data)
    }
    fetchUsers()
  },[post.userId])
  const likehandler=()=>{
    setLikeCountount(isLiked ? likecount-1 : likecount+1)
    setIsLiked(!isLiked)
  }
  return (
      <div className='post'>
          <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
                      <Link to = {`profile/${post.userId}`}>
                          <img src={user.profilePicture || pf + "person/noAvatar.png"} alt="" className="postProfileImg" />
                      </Link>
                      <span className="postUsername">{user.username}</span>
                      <span className="postDate">{format(post.createdAt)}</span>
                  </div>
                  <div className="postTopRight">
                      <MoreVertIcon />
                  </div>
              </div>
              <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={pf + post.img} alt="" className="postImg" />
              </div>
              <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={`${pf}like.png`} alt="" className='likeIcon' onClick={likehandler} />
                    <img src={`${pf}heart.png`}  alt="" className='likeIcon' onClick={likehandler} />
                    <span className='postLikeCounter'>{likecount} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
              </div>
          </div>
      </div>
  )
}

export default Post