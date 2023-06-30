import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineEye } from "react-icons/ai";
import { useSelector, useDispatch} from "react-redux";
import { Card , Container } from "react-bootstrap";
import { addtoCart} from "../redux/Slice/cartSlice";
import {AiOutlineShoppingCart } from "react-icons/ai";



export default function Promotion() {
  const dispatch = useDispatch()
  const prods = useSelector((state) =>
    state.prod.products.filter((prod) => prod.codPromo > 0)
  );
  const [promoProduct, setPromoProduct] = useState(prods);

  useEffect(() => {
    setPromoProduct(prods);
  }, []);

  return (
  
      <Container className="my-5 text-center">
        <div
          md="6"
          lg="4"
          className="d-md-flex align-items-md-center flex-wrap gap-md-0 gap-2  mb-3 flex-md-row flex-column  justify-content-md-center row"
        >
          {prods.map((prod) => (
            <Card
              style={{ width: "20rem" }}
              key={prod._id}
              className="p-2 text-center  m-auto m-md-3"
            >
            <Card.Title className="d-flex  justify-content-between">{prod.title} <small className="bg-danger rounded-9 p-1 text-white"> - {prod.codPromo}%</small></Card.Title>
              <Card.Img src={prod.image.url} alt={prod.title} height="350" />
              <Card.Body>
                <Card.Text>{prod.category}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="d-flex justify-content-center gap-5">${prod.price  - ((prod.price*prod.codPromo)/100)} <span className="text-danger text-decoration-line-through">${prod.price}</span></ListGroup.Item>
                <ListGroup.Item>{prod.author}</ListGroup.Item>
                <ListGroup.Item>{prod.publisher}</ListGroup.Item>
                <ListGroup.Item>{prod.editionYear}</ListGroup.Item>
              </ListGroup>
              <Card.Body className="d-flex justify-content-center gap-5">
                <Link to={`/Prod-details/${prod._id}`}>
                  <AiOutlineEye />
                </Link>
                <Link onClick={(()=> dispatch(addtoCart(prod)))}><AiOutlineShoppingCart/></Link>
                <Link to="/">Back to home</Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
 
  );
}
