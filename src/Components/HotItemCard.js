import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
function HotItemCard({name,image,price,index}) {
  return (
   
   <div className='mt-14 mx-auto'>
     <Card className="w-96 transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110 ">
    <CardHeader shadow={false} floated={false} className="h-64">
      <img 
        src={image} 
        className="w-full h-full object-cover"
      />
    </CardHeader>
    <CardBody>
      <div className="flex items-center justify-between mb-2">
        <Typography color="blue-gray" className="font-medium">
        {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium">
          {price}
        </Typography>
      </div>
     
    </CardBody>
    <CardFooter className="pt-0">
      <Button
        ripple={false}
        fullWidth={true}
        className="bg-blue-900 text-white shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
      >
        Add to Cart
      </Button>
    </CardFooter>
  </Card>
   </div>
  )
}

export default HotItemCard