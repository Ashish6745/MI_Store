import React from 'react'
import "../styles/videoCard.css"
//import { Carousel } from '@material-tailwind/react'
const playButton = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>

function VideosCard({name,image}) {
  return (
    <div className="videoCard" style={{backgroundImage:`url(${image})`}}>
        
        <a href="#/">{playButton}</a>          
        <p>{name}</p>  
       </div>
   
  )
}

export default VideosCard