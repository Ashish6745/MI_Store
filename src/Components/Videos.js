import React from 'react'
import VideosCard from './VideosCard'
import '../styles/Videos.css'
function Videos({video}) {
  return (
    <div className='videos'>
        {
            video.map((data,index)=>(
                <VideosCard image={data.image} name={data.name} />
            ))
        }
    </div>
  )
}

export default Videos