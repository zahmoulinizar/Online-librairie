import React, { useState } from "react";
import { Container} from "react-bootstrap";
import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {AiOutlineCheck} from "react-icons/ai";
import {CgUnavailable} from "react-icons/cg";

export default function OurStore() {
  const  [quantity , setQuantity] = useState(0)
  const  [category , setCategory] = useState()
  const products = useSelector((state) => state.prod.products);
  return (
    <div>
      <div className="d-flex justify-content-end me-5">
        <ButtonGroup size="sm">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <Container className="d-flex justify-content-between border border-2 ">
        <div className="m-3">
          {products.category  && products.map((prod) => (
            <ListGroup className="d-flex flex-column gap-3" key={prod._id}>
               <ListGroup.Item
                className="mb-2  d-flex  justify-content-between gap-3 text-capitalize"
                style={{ color: "#85144b" }}
              >
               {prod.category} 
                <span
                  className="ms-1 d-flex align-items-center justify-content-center rounded-circle "
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#001f3f",
                  }}
                >
                  <p className="text-white mb-0 small">{prod.quantity+quantity}</p>
                </span>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
        <div className="d-flex  flex-wrap justify-content-between gap-3 m-2 p-2 border border-2" style={{ width: "60rem" }}>
          {products.map((prod) => (
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
          ))}
        </div>
      </Container>
    </div>
  );
}
