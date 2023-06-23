import React from 'react'
import ProductCard from './ProductCard'
function ProductReview({productReview}) {
  return (
    <div className='flex items-center justify-center'>
        {
         productReview.map((item,index)=>(
            <ProductCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />
         ))
        }
    </div>
  )
}

export default ProductReview