import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidebar from "../Components/Sidebar";


function AdminDashboard() {
  const name = useSelector((state) => state.auth.user?.userName);

  return (
    <div className="">
      <Row >
        <Col  ClassName="col-lg-2 col-12"> <Sidebar/></Col>
        <Col  className="col-lg-10 col-12  mt-lg-5 pt-lg-5"><h2>Welcome to the home page {name}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </p>
      </Col>
      </Row>
    </div>
  );
}

export default AdminDashboard;
