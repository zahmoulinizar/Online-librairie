import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerItem } from "../redux/Slice/userSlice";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import img from "../Assets/Images/anlayse_financi_re_1.jpg";

function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  console.log(image);
  const user = { name, email, phone, address, password, image };
  console.log(user);

  const uploadHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    } else {
      setImage("");
    }
  };
  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(registerItem(user));
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setPassword("");
  };

  return (
    <Container className="m-auto" >
      <Row>
        <Col lg="4">
          <img src={img} alt="" variant="top" width={"100%"} height={"100%"} />
        </Col>
        <Col lg="8">
          {" "}
          <Form
            className="d-flex flex-column w-75 gap-3"
            enctype="multipart/form-data"
          >
            <Form.Group className="d-flex mb-3" controlId="formGroupName">
              <Form.Control
                type="text"
                placeholder="Enter UserName"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="formGroupEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="formGroupPhone">
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="formGroupAddress">
              <Form.Control
                type="text"
                placeholder="Enter address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="formGroupImage">
              <Form.Control
                class="form-control-file"
                type="file"
                accept="image/"
                placeholder="product Brand"
                autoFocus
                onChange={uploadHandler}
              />
            </Form.Group>

            <Form.Group className="d-flex mb-3" controlId="formGroupPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              className="w-100 border border-2 text-center fs-5  p-1 text-uppercase"
              variant="primary"
              type="submit"
              onClick={registerHandler}
            >
              Sign Up
            </Button>
            <Link
              to="/forget"
              className="w-100  text-center fs-5 text-dark text-decoration-underline "
            >
              {" "}
              Forget your password ?
            </Link>
            <Link
              to="/login"
              className="w-100 border border-2 border-dark text-center fs-5 text-black p-1 text-uppercase"
            >
              Login
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
