import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {AiOutlineCheck} from "react-icons/ai";
import {CgUnavailable} from "react-icons/cg";

export default function New() {
    const [editionYear, setEditionYear] = useState("");
    const product =useSelector((state) => state.prod.products)

    const edition = useSelector((state) => state.prod.product.editionYear);
    console.log(edition)
  return (
    <div>
        <>latest news</>
      {edition >2019 && product.map((prod)=>{
        {console.log(editionYear)}
        <Card style={{ width: "18rem" }} key={prod._id} className="border border-2 p-2 text-center">
        <Card.Title >{prod.title}</Card.Title>
        <Card.Img
          variant="top"
          src={prod.image.url}
          alt={prod.title}
          width="100%"
          height="350"
        />
        <Card.Body>
          <Card.Title className="text-muted">{prod.publisher}</Card.Title>
          <Card.Title>{prod.price}</Card.Title>
          <Card.Title>{prod.quantity > 0 ? (
                <span className="text-success"> <AiOutlineCheck/> Available </span>
                ) : (
                  <span className="text-danger"><CgUnavailable/> unavailable</span>
                  )}</Card.Title>

          {prod.quantity===0  ? 
            (<Button variant="primary" className="cursor-na" disabled>read more</Button>) : (<Button variant="primary">read more</Button>)}
        </Card.Body>
      </Card>
      })}
    </div>
  )
}
