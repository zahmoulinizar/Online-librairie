import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Button, NavDropdown } from "react-bootstrap";
//import "../App.css";

import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginItem, logoutItem } from "../redux/Slice/userSlice";
import { decCount, incCount, deleteProd } from "../redux/Slice/cartSlice";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import "./Cart.css";

import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../Assets/Logos/logo.png";

export default function TopNavbar() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const user = { email, password, role };
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
  // off canvas for shopping cart

  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const { cart, total } = useSelector((state) => state.shopCart);

  return (
    <div className="TopNavBar">
      <p
        className=" w-100 text-center text-white fs-6 p-2"
        style={{ backgroundColor: "#001f3f" }}
      >
        FREE SHIPPING ON US ORDERS &gt; &gt;{" "}
        <Link to={"/new"} className="text-white">
          SHOP NEW ARRIVALS
        </Link>
      </p>

      <Navbar
        collapseOnSelect
        expand="lg"
        variant="info"
        className="d-flex justify-content-between"
      >
        <Container className=" flex-lg-wrap d-flex justify-content-between">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              height="102"
              width={200}
              loading="lazy"
            />
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav  " />
          <Navbar.Collapse
            id="responsive-navbar-nav "
            className="order-4 order-lg-3  justify-content-center"
          >
            <Nav className="d-flex justify-content-center text-white gap-3 flex-wrap  ms-4 ">
              <Link
                className="text-decoration-none"
                style={{ color: "#85144b" }}
                to="/"
              >
                HOME
              </Link>
              <Link
                className="text-decoration-none"
                style={{ color: "#85144b" }}
                to="/store"
              >
                OUR STORE
              </Link>
              <Link
                className="text-decoration-none"
                style={{ color: "#85144b" }}
                to="/promo"
              >
                PROMOTIONS
              </Link>
              <Link
                className="text-decoration-none"
                style={{ color: "#85144b" }}
                to="/news"
              >
                NEWS
              </Link>
              <Link
                className="text-decoration-none"
                style={{ color: "#85144b" }}
                to="/about"
              >
                ABOUT
              </Link>
              {auth.user?.role === "admin" && (
                <Link
                  className="text-decoration-none"
                  style={{ color: "#85144b" }}
                  to="/admin"
                >
                  DASHBOARD
                </Link>
              )}
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
                      <AiOutlineUser />
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
                          to="/reset"
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
            <Button variant="white">
              <h4 className="text-black">
                <AiOutlineHeart />
              </h4>
            </Button>

            <Button variant="white">
              <h4 onClick={handleShowCart} className="text-black">
                <AiOutlineShoppingCart />
              </h4>
            </Button>

            <Offcanvas
              show={showCart}
              onHide={handleCloseCart}
              placement="end"
              size="md"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col">
                    <div
                      class="card shopping-cart"
                      style={{ borderRadius: "15px" }}
                    >
                      <div class="card-body text-black">
                        <div class="row">
                          <div class="col-lg-12 ">
                            {cart.map((prod) => (
                              <div
                                class="d-flex align-items-center mb-5 w-50"
                                key={prod._id}
                              >
                                <div class="flex-shrink-0">
                                  <img
                                    src={prod.image.url}
                                    class="img-fluid"
                                    style={{ width: "80px" }}
                                    alt="Generic placeholder image"
                                  />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                  <a
                                    href="#!"
                                    class="float-end text-black me-3"
                                    onClick={() => dispatch(deleteProd(prod))}
                                  >
                                    <AiOutlineDelete />
                                  </a>
                                  <h5 class="text-primary w-75">
                                    {prod.title}
                                  </h5>
                                  <h6 style={{ color: "#9e9e9e" }}>
                                    {prod.category}
                                  </h6>
                                  <div class="d-flex align-items-center">
                                    <p class="fw-bold mb-0 me-5 pe-3">
                                      ${prod.price}
                                    </p>
                                    <div class="def-number-input number-input safari_only">
                                      <span
                                        onClick={() => dispatch(incCount(prod))}
                                        class="me-1 pe-1"
                                      >
                                        <AiOutlinePlus />
                                      </span>
                                      <span class="me-1 pe-1">
                                        {prod.count}
                                      </span>

                                      <span
                                        onClick={() => dispatch(decCount(prod))}
                                        class="me-1 pe-1"
                                      >
                                        <AiOutlineMinus />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}

                            <hr
                              class="mb-4"
                              style={{
                                height: "2px",
                                backgroundColor: "#1266f1",
                                opacity: 1,
                              }}
                            />

                            <div
                              class="d-flex justify-content-between p-2 mb-2"
                              style={{ backgroundColor: "#e1f5fe" }}
                            >
                              <h5 class="fw-bold mb-0">Total:</h5>
                              <h5 class="fw-bold mb-0">{total}$</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
