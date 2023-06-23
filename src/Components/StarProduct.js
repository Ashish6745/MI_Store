import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  cardFooter
} from "@material-tailwind/react";
function StarProduct({ StarProduct }) {
  return (
    <div className="starProduct" style={
        {
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around'
        }
    }>
      <Card className="w-98">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={StarProduct[0].image}
            className="w-full h-full object-cover"
          />
        </CardHeader>
       
      </Card>
      <Card className="w-98">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={StarProduct[1].image}
            className="w-full h-full object-cover"
          />
        </CardHeader>
       
      </Card>
      <Card className="w-98">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={StarProduct[2].image}
            className="w-full h-full object-cover"
          />
        </CardHeader>
       
      </Card>
      
    </div>
  );
}

export default StarProduct;
