import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginItem } from "../redux/Slice/userSlice";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import video1 from "../Assets/video/Library books,No Copyright, Copyright Free Video, Motion Graphics, Background Video.mp4"
export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const user = {email, password,role };
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    // if (auth.isLogin)  {navigate("/Profile")};
    if(auth.user?.role==="admin") {navigate("/")} 
    if(auth.user?.role==="user") {navigate("/accueil")}
   // else {navigate("/newProduct")}
  }, [auth.user?.role, navigate]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginItem(user));
    
  };
  return (
    <div className="w-100">       
    <Container fluid className="m-auto top-0 position-relative bg" >
      
      <Form className="p-3 bg-secondary">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
       
        <Button className="m-3" variant="primary" type="submit" onClick={loginHandler}>
          Sign In
        </Button>
        <Link to="/forget" className="m-3">Forget Password</Link>
        <Link to="/register ">Register </Link>
      </Form>
      </Container>
      </div>
 
            
  );
}
