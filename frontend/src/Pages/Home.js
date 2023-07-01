import React, { useEffect } from "react";
import banner from "../Assets/Images/Sans titre.jpg";

import { Card, Container } from "react-bootstrap";
import video2 from "../Assets/video/Sans titre.mp4";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/Slice/ProdSlice";
import { addtoCart} from "../redux/Slice/cartSlice";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import { AiOutlineCheck } from "react-icons/ai";
import {AiOutlineShoppingCart } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import New from "./New";
import Promotion from "./Promotion";
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  //get  product from slice

  const prod = useSelector((state) => state.prod.products);
  return (
    <div>
      {
        // header section
      }
      <section className="d-lg-flex justify-content-between  d-block">
        <div>
          <img src={banner}   alt="" height="100%" responsive/>;
        </div>
        <div className="h-100 border border-2" style={{ height: "600px" }}>
          <video className="d-block w-100" autoPlay a muted>
            <source src={video2} type="video/mp4" allowFullScreen />
          </video>
          <div className="bg-dark"></div>
        </div>
      </section>
      <Container>
        {
          // our product
        }
        <div className="mt-2 ">
          <h2
            style={{ color: "#85144b" }}
            className=" bg-white text-uppercase text-center m-3 "
          >
            our books
          </h2>
          <div className="d-md-flex align-items-md-center flex-wrap gap-md-0 gap-2  mb-3 flex-md-row flex-column  justify-content-md-center row">
            {prod.slice(0, 6).map((product) => (
              <Card
                style={{ width: "20rem" }}
                key={product._id}
                className="p-2 text-center  m-auto m-md-3"
              >
                <Card.Title>{product.title}</Card.Title>
                <Card.Img
                  variant="top"
                  src={product.image?.url}
                  alt={product.title}
                  width="100%"
                  height="350"
                />
                <Card.Body className="d-flex flex-column gap-2">
                  <Card.Title className="d-flex justify-content-around gap-5">
                    ${product.price}
                  </Card.Title>
                  <Card.Title className="text-muted">
                    {product.publisher}
                  </Card.Title>
                  <Card.Title>
                    {product.quantity > 0 ? (
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
                <Card.Link className="d-flex justify-content-center gap-3" >
                  <Link to={`/Prod-details/${product._id}`} ><AiOutlineEye /></Link>
                  <Link onClick={(()=> dispatch(addtoCart(product)))}><AiOutlineShoppingCart/></Link>
                </Card.Link>
              </Card>
            ))}
          </div>
        </div>

        {
          // our product
        }
      </Container>
      <h2
            style={{ color: "#85144b" }}
            className=" bg-white text-uppercase text-center m-3"
          >
            newest books
          </h2>
        <New/>
        <h2
            style={{ color: "#85144b" }}
            className=" bg-white text-uppercase text-center m-3"
          >
            our Promotion
          </h2>
        <Promotion/>
    </div>
  );
}
