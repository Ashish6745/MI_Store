import React from 'react'
import HotItemCard from './HotItemCard'
function HotAccessories({music, musicCover,smartDevice,smartDeviceCover,home,homeCover,lifestyle,lifestyleCover,mobileAccessories}) {
  return (
    <div className='HotAccessories  '>
      
        
        {/* -------2nd section------- */}
        <div className='grid grid-cols-3'>
            {
              music &&  music.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}  />
                ))
            }
            {
              smartDevice &&  smartDevice.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}  />
                ))
            }
             {
              home &&  home.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}  />
                ))
            }
            {
              lifestyle &&  lifestyle.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}  />
                ))
            }
            {
              mobileAccessories &&  mobileAccessories.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}  />
                ))
            }
        </div>
    </div>
  )
}

export default HotAccessories