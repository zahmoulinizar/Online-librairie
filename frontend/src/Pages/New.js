import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useSelector , useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import { addtoCart} from "../redux/Slice/cartSlice";
import {AiOutlineShoppingCart } from "react-icons/ai";



export default function New() {
  const dispatch = useDispatch()
  const product = useSelector((state) =>
    state.prod.products.filter((prod) => prod.editionYear > 2019)
  );
  const [newProduct, setNewProduct] = useState(product);

  useEffect(() => {
    setNewProduct(product);
  }, []);

  return (
    <Container className="mt-3">
      <div className="d-md-flex align-items-md-center flex-wrap gap-md-0 gap-2  mb-3 flex-md-row flex-column  justify-content-md-center row">
        {product.map((prod) => (
          <Card
            style={{ width: "20rem" }}
            key={prod._id}
            className="p-2 text-center  m-auto m-md-3"
          >
            <Card.Title className="d-flex  justify-content-between">{prod.title} 
            <small className="bg-danger rounded-9 p-1 text-white">New</small></Card.Title>
            <Card.Img src={prod.image.url} alt={prod.title} height="350" />
            <Card.Body className="d-flex flex-column gap-2">
                  <Card.Title className="d-flex justify-content-around gap-5">
                    ${prod.price}
                  </Card.Title>
                  <Card.Title className="text-muted">
                    {prod.publisher}
                  </Card.Title>
                  <Card.Title>
                    {prod.quantity > 0 ? (
                      <span className="text-success">
                        {" "}
                        <AiOutlineCheck /> Available{" "}
                      </span>
                    ) : (
                      <span className="text-danger">
                        <CgUnavailable /> unavailable
                      </span>
                    )}
                  </Card.Title>
                </Card.Body>
                <Card.Link >
                  <Link to={`/Prod-details/${product._id}`} ><AiOutlineEye /></Link>
                  <Link onClick={(()=> dispatch(addtoCart(prod)))}><AiOutlineShoppingCart/></Link>
                </Card.Link>
          </Card>
        ))}
      </div>
    </Container>
  );
}
