import React from 'react'
import Cards from './Cards';

function Modal({show, onClose}) {
    if(!show)  return null;
  return (
    <div className='flex items-center justify-evenly'>
    
    <div>
    <Cards onClose={onClose} />
    
    </div>
    <div>
    <Cards onClose={onClose} />
    
    </div>
    <div>
    <Cards onClose={onClose} />
    
    </div>
    
    </div>
  )
}

export default Modal