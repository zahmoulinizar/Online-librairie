import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Table from "react-bootstrap/Table";

import { AddProd, deleteProd, getAllProducts, updateProd } from "../redux/Slice/ProdSlice";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";

export default function AddProduct() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [genre, setGenre] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [publisher, setPublisher] = useState("");
  const [editionYear, setEditionYear] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const product = {
    title,
    genre,
    desc,
    quantity,
    price,
    category,
    editionYear,
    author,
    publisher,
    image,
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  //get  product from slice

  const products = useSelector((state) => state.prod.products);

  // function to add product
  const CreateProdHandler = () => {
    dispatch(AddProd(product));
  };
  useEffect(() => {
    handleClose();
  }, [products]);

  // uplaod image
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

  // getting all products

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  // delete product
  const deleteProdHandler = (id) => {
    dispatch(deleteProd(id));
  };
  return (
    <>
      <Row>
        <Col ClassName="col-lg-2 col-12">
          {
            //  import Sidebar
          }
          <Sidebar />
        </Col>
        <Col className="col-lg-10 col-12 mt-2">
          <Button variant="primary" onClick={handleShow} className="m-5">
            new product
          </Button>
          {
            //  start for Modal to add product
          }
          <Modal show={show} onHide={handleClose} size="md">
            <Modal.Header closeButton>
              <Modal.Title>Product creating </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col>
                    {" "}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Title"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Genre</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Genre"
                        autoFocus
                        onChange={(e) => setGenre(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Publisher</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Publisher"
                        autoFocus
                        onChange={(e) => setPublisher(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Author</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Author"
                        autoFocus
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                    </Form.Group>
                  </Col>{" "}
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Category</Form.Label>

                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option>Select your category</option>
                        <option value="Tunisien edition book">
                          Tunisien edition book
                        </option>
                        <option value="Arabic edition book">
                          Arabic edition book
                        </option>
                        <option value="French edition book">
                          French edition book
                        </option>
                        <option value="book in english">book in english</option>
                        <option value="school and pedagogical book">
                          school and pedagogical book
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="price"
                        autoFocus
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </Form.Group>
                  </Col>{" "}
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Quantity"
                        autoFocus
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>description</Form.Label>

                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Description"
                      >
                        <Form.Control
                          as="textarea"
                          style={{ height: "100px" }}
                          autoFocus
                          onChange={(e) => setDesc(e.target.value)}
                        />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Year of edition </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Year of edition"
                        autoFocus
                        onChange={(e) => setEditionYear(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Image</Form.Label>
                      <Form.Control
                        type="file"
                        accept="image/"
                        autoFocus
                        onChange={uploadHandler}
                      />
                    </Form.Group>
                    <img src={image} alt="" height={32} width={32} />
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={CreateProdHandler}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          {
            //  end for  Modal to add product
          }
          {
            // start for  table to display all products
          }

          <Table striped bordered hover size="xxl" responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Publisher</th>
                <th>Category</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Year of edition </th>
                <th>state</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => (
                <tr Key={product._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={product.image.url}
                      alt=""
                      height={42}
                      width={38}
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.author}</td>
                  <td>{product.genre}</td>
                  <td>{product.publisher}</td>
                  <td>{product.category}</td>
                  <td width="250px">{product.desc.slice(0, 35)}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>{product.editionYear}</td>
                  <td>
                    {product.quantity > 0 ? (
                      <span> Available </span>
                    ) : (
                      <span>unavailable</span>
                    )}
                  </td>
                  <td>
                    <span>
                      <Link to={`/Prod-details/${product._id}`}>
                        <AiOutlineEye />
                      </Link>
                    </span>
                    <Link to={`/UpdateProd/${product._id}`}>
                      <AiOutlineEdit/>
                    </Link>
                    
                    <span onClick={() => deleteProdHandler(product._id)}>
                      <AiOutlineDelete />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {
            // end for  table to display all products
          }
        </Col>
      </Row>
    </>
  );
}
