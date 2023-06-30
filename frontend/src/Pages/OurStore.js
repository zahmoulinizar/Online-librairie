import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { AiOutlineCheck } from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

import axios from "axios";

export default function OurStore() {
  const [sums, setSums] = useState([]);
  const prod = useSelector((state) => state.prod.products);


  useEffect(() => {
    // Make an HTTP request to fetch the sums of data
    axios
      .get(process.env.REACT_APP_BASE_URL +"/prod/sumCategory")
      .then((response) => {
        setSums(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  ///
  const [category, setCategory] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults)


  useEffect(() => {
    // Make an HTTP request to search by category
    axios
      .get(process.env.REACT_APP_BASE_URL +"/prod/search-by-category", {
        params: { category },
      })
      .then((response) => {
        setSearchResults(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Form className="d-flex">
          <Form.Select
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
          >
            <option>Select your category</option>
            <option value="Tunisien edition book">Tunisien edition book</option>
            <option value="Arabic edition book">Arabic edition book</option>
            <option value="French edition book">French edition book</option>
            <option value="book in english">book in english</option>
            <option value="school and pedagogical book">
              school and pedagogical book
            </option>
          </Form.Select>
        </Form>
      </Container>
      <Container className="d-flex justify-content-between border border-2 ">
        <ListGroup className="d-flex flex-column mt-3  gap-3 rounded-5">
          {sums.map((sum, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between gap-3 rounded-5"
              style={{ width: "300px" }}
            >
              <span>{sum._id}</span>
              <small
                className="rounded-9 d-flex align-items-center justify-content-center shadow-1-strong text-white"
                style={{
                  width: "60px",
                  height: "35px",
                  backgroundColor: "#001f3f",
                }}
              >
                {sum.total}
              </small>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <div className="d-md-flex align-items-md-center flex-wrap gap-md-0 gap-1  mb-3 flex-md-row flex-column  justify-content-md-center row border border-2">
          {searchResults.map((result, index) => (
            // Display the relevant field from the search results
            <Card
              style={{ width: "19rem" }}
              key={index}
              className="border border-2 p-2 text-center"
            >
              <Card.Title>{result.title}</Card.Title>
              <Card.Img
                variant="top"
                src={result.image.url}
                alt={result.title}
                width="100%"
                height="350"
              />
              <Card.Body>
                <Card.Title className="text-muted">
                  {result.category}
                </Card.Title>
                <Card.Title>${result.price}</Card.Title>
                <Card.Title>
                  {result.quantity > 0 ? (
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
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
