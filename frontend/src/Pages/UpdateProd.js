import React, { useEffect, useState } from "react";
import { getAllProducts, updateProd } from "../redux/Slice/ProdSlice";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { Col, FloatingLabel, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

export default function UpdateProd() {
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
  // upload image
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
  const { id } = useParams();
  console.log(id)
  const updateProdhandler = () => {
    dispatch(updateProd({product , id}));
  };
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <div>
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
          <Button variant="primary" onClick={updateProdhandler}>
            Save Changes
          </Button>
        </Form>
      </div>
    </div>
  );
}
