import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
function ProductCard({price,name,index,image,review}) {
  return (
    <div className=' ml-12'>
    <Card className="w-96">
    <CardHeader floated={false} className="h-80">
      <img src={image} alt="profile-picture" />
    </CardHeader>
    <CardBody className="text-center">
      <Typography variant="h3" color="green" className="mb-2">
       {name}
      </Typography>
      <Typography  variant="h4" color="red" className="font-medium" textGradient>
      {price}
      </Typography>
    </CardBody>
    <CardFooter className="flex justify-center gap-7 pt-2">
      <Tooltip content="Like">
        <Typography
          as="a"
          href="#facebook"
          variant="lead"
          color="blue"
          textGradient
        >
          <i className="fab fa-facebook" />
        </Typography>
      </Tooltip>
      <Tooltip content="Follow">
        <Typography
          as="a"
          href="#twitter"
          variant="lead"
          color="light-blue"
          textGradient
        >
          <i className="fab fa-twitter" />
        </Typography>
      </Tooltip>
      <Tooltip content="Follow">
        <Typography
          as="a"
          href="#instagram"
          variant="lead"
          color="purple"
          textGradient
        >
          <i className="fab fa-instagram" />
        </Typography>
      </Tooltip>
    </CardFooter>
  </Card>
    </div>
  )
}

export default ProductCard