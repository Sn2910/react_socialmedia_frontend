import React from 'react'
import '../share/share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Share() {
  return (
    <div className='share'>
       <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/3.jpeg" alt="" className="shareImg" />
          <input placeholder='What`s on your mind?' className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor="tomato"className='shareIcon'/>
                   <span className='shareOptionText'>Photos or Videos</span>  
                </div>
                <div className="shareOption">
                    <LabelIcon htmlColor="blue" className='shareIcon'/>
                   <span className='shareOptionText'>Tag</span>  
                </div>
                <div className="shareOption">
                    <LocationOnIcon htmlColor="green" className='shareIcon'/>
                   <span className='shareOptionText'>Location</span>  
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor="goldenrod" className='shareIcon'/>
                   <span className='shareOptionText'>Feelings</span>  
                </div>
               
            </div>
            <button className="shareButton">Share</button>
        </div>
       </div>
    </div>
  )
}

export default Share