import React from 'react'

function Offer({index, src,link}) {
  return (
    <a href={link}>
        <img src={src} alt={index} />
    </a>
  )
}

export default Offer