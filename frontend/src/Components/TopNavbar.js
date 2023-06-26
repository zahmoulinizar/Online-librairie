import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Button, NavDropdown } from "react-bootstrap";
import '../App.css'

import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { loginItem, logoutItem } from "../redux/Slice/userSlice"
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../Assets/Logos/logo.png";


export default function TopNavbar() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const user = { email, password,role};
  const userImg = useSelector((state) => state.auth.user?.image?.secure_url);
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutItem());
  };
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginItem(user));
    setEmail("");
    setPassword("");
  };
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
   //if (!auth.isLogin) {navigate("/");}
  
  // else {navigate("/newProduct")}
  }, [auth.isLogin, navigate]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="TopNavBar">
      <p className=" w-100 text-center text-white fs-6 p-2" style={{backgroundColor:'#001f3f'}} >
        FREE SHIPPING ON US ORDERS &gt; &gt;{" "}
        <Link to={'/new'} className="text-white">SHOP NEW ARRIVALS</Link>
      </p>

      <Navbar collapseOnSelect expand="lg" variant="info" className="d-flex justify-content-between">
        <Container  className=" flex-lg-wrap d-flex justify-content-between">
          <Link to="/">
            <img src= {logo} alt="logo" height="102" width={200} loading="lazy"  />
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav  "   />
          <Navbar.Collapse id="responsive-navbar-nav " className="order-4 order-lg-3  justify-content-center"   >
          <Nav className="d-flex justify-content-center text-white gap-3 flex-wrap  ms-4 ">
            <Link className="text-decoration-none" style={{color:"#85144b"}} to="/">HOME</Link>
            <Link className="text-decoration-none"  style={{color:"#85144b"}} to="/store">OUR STORE</Link>
            <Link className="text-decoration-none" style={{color:"#85144b"}} to="/promo">PROMOTIONS</Link>
            <Link className="text-decoration-none" style={{color:"#85144b"}} to="/news">NEWS</Link>
            <Link className="text-decoration-none"style={{color:"#85144b"}} to="/about">ABOUT</Link>
            {auth.user?.role === "admin" &&
              <Link className="text-decoration-none" style={{color:"#85144b"}} to="/admin">DASHBOARD</Link>}
          </Nav>
           
          </Navbar.Collapse>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="d-flex justify-content-end   order-3 order-lg-4" 
            
          >
            <Nav>
              {!auth.isLogin ? (
                <>
                  <Button variant="white" onClick={handleShow}>
                    <h4 className="text-black">
                      <AiOutlineUser />{" "}
                    </h4>
                  </Button>
                  <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title className="ms-4 fs-3 text-black">
                        Login
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Form className="w-100 p-4 d-flex flex-column gap-3 ">
                        <Form.Group controlId="formGroupEmail">
                          <Form.Label className="fs-5 text-black">
                            Email Address{" "}
                            <span className=" text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                          <Form.Label className="fs-5 text-black">
                            Password <span className=" text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>

                        <Button
                          className="w-100  mt-3 fs-4  text-white"
                          variant="dark"
                          type="submit"
                          onClick={loginHandler}
                        >
                          Sign In
                        </Button>
                        <Link
                          to="/forget"
                          className="w-100  text-center fs-5 text-dark text-decoration-underline "
                        >
                          {" "}
                          Forget your password ?
                        </Link>
                        <Link
                          to="/register"
                          className="w-100 border border-2 border-dark text-center fs-5 text-black p-1 text-uppercase"
                        >
                          Create account{" "}
                        </Link>
                      </Form>
                    </Offcanvas.Body>
                  </Offcanvas>
                </>
              ) : (
                <NavDropdown
                  title={
                    <img
                      className="rounded-circle object-cover"
                      src={userImg}
                      alt="user pic"
                      height="32"
                      width={32}
                      loading="lazy"
                    />
                  }
                  id="navbarScrollingDropdown"
                >
                  <div className="d-flex flex-column gap-2 p-1">
                    <Link to="/Profile" className="w-75  fs-5 text-black p-1 ">
                      My Profile
                    </Link>
                    <Link
                      onClick={logoutHandler}
                      className="w-75  fs-5 text-black p-1 "
                    >
                      Log Out
                    </Link>
                  </div>
                </NavDropdown>
              )}
            </Nav>
            <h4 className="me-3 text-black">
              <AiOutlineHeart /> 
            </h4>
            <h4 className="me-2 text-black">
              <AiOutlineShoppingCart />
            </h4>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

    

     
    </div>
  );
}
