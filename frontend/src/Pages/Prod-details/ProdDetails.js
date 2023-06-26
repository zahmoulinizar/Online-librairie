import React from "react";
import {  useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProd } from "../../redux/Slice/ProdSlice";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineCheck } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

//import './prodDetails.css'

export default function ProdDetails() {
  const product = useSelector((state) => state.prod.product);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProd(id));
  }, [id]);
  // update product

  return (
    <Container
      className="border border-3 p-2 bg-secondary rounded-8 mt-2 "
      variant="top"
      position="top"
    >
      <div>
        <h2 className="text-center">{product?.title}</h2>
      </div>
      <Row className="border border-3 m-2 p-4 gap-0 bg-black h-75 rounded-8">
        <Col className="col-12 border border-3 p-4 bg-white col-lg-6">
          <img src={product?.image?.url} alt="cover img" width="100%" />
        </Col>
        <Col className="col-12 d-flex border border-2 bg-dark p-3  bg-white  col-lg-6">
          <ListGroup className="rounded-8">
            <ListGroup.Item disabled>
              <strong>Publisher :</strong> {product?.publisher}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Price : </strong> $ {product?.price}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description : </strong>
              {product?.desc}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Author : </strong> {product?.author}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Year of edition : </strong>
              {product?.editionYear}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong></strong>
              {product?.author}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Genre : </strong>
              {product?.genre}
            </ListGroup.Item>

            <ListGroup.Item>
              {product?.quantity > 0 ? (
                <span className="text-success">
                  {" "}
                  <AiOutlineCheck /> Available{" "}
                </span>
              ) : (
                <span className="text-danger">
                  <CgUnavailable /> unavailable
                </span>
              )}
            </ListGroup.Item>
            <ListGroup.Item className="border border-0 m-3 p-2">
              {product?.quantity === 10 && (
                <Button className="bg-danger fs-6">
                  Last {product?.quantity} product in stock
                </Button>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
