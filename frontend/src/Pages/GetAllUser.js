import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Sidebar from "../Components/Sidebar";
import { useSelector } from "react-redux";


export default function GetAllUser() {
  const [users, setUsers] = useState([]);
  const auth = useSelector((state) => state.auth);

  function getUsers() {
    axios
      .get(process.env.REACT_APP_BASE_URL +"/user/allUsers", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((Response) => {
        setUsers(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Row>
        <Col ClassName="col-lg-2 col-12">
          {" "}
          <Sidebar />
        </Col>
        <Col className="col-lg-10 col-12 mt-2">
          <Container fluid>
            <ListGroup className="text-center bg-info m-2">
              <h1>List of users</h1>
            </ListGroup>
            <ListGroup className="bg-black text-white d-none d-lg-flex">
              <Row>
                <Col className="col-1 text-center">#</Col>
                <Col className="col-2 border-start">Name</Col>
                <Col className="col-3 border-start">Email</Col>
                <Col className="col-2 border-start">Address</Col>
                <Col className="col-1 border-start">Phone</Col>
                <Col className="col-1 border-start">Role</Col>
                <Col className="col-2 border-start">image</Col>
              </Row>
            </ListGroup>

            {users.map((user, index) => (
              <ListGroup key={user._id} >
                <ListGroup.Item className="m-1" >
                  <Row>
                    <Col className="col-lg-1  d-none d-lg-flex ">{index + 1}</Col>
                    <Col className="col-lg-2 col-5 col-sm-6  mb-3 d-flex  mb-lg-0 "><span className="d-flex d-lg-none text-white me-1">Name: </span>{user.name}</Col>
                    <Col className="col-lg-3 col-7  col-sm-6 mb-3 d-flex mb-lg-0"><span className="d-flex d-lg-none text-white me-1">Email: </span>{user.email}</Col>
                    <Col className="col-lg-2 col-5 col-sm-6 mb-3 d-flex mb-lg-0"><span className="d-flex d-lg-none text-white me-1">Address: </span>{user.address}</Col>
                    <Col className="col-lg-1 col-7 col-sm-6 mb-3 d-flex mb-lg-0"><span className="d-flex d-lg-none text-white me-1">Phone: </span>{user.phone}</Col>
                    <Col className="col-lg-1 col-5 col-sm-6 mb-3 d-flex mb-lg-0 text-center"><span className="d-flex d-lg-none text-white me-1">Role :</span> {user.role}</Col>
                    <Col className="col-lg-2 col-sm-6 col-7  d-flex mb-3 mb-lg-0 text-center">
                      <img 
                        src={user.image?.secure_url}
                        alt=""
                        height="72"
                        loading="lazy"
                      />
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            ))}
          </Container>
        </Col>
      </Row>
    </>
  );
}
