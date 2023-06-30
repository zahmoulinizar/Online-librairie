import axios from 'axios';
import React, { useEffect, useState }  from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { updateUser } from '../redux/Slice/userSlice';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import {Col, Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Profile() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image ,setImage] = useState('')
  const [isEdit , setIsEdit] = useState(false)
  const user = {name, password ,phone,address,image};
  const [users, setUsers] = useState([]);
  function getUsers() {
    axios
      .get(process.env.REACT_APP_BASE_URL +"/user/Profile", {
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
  const  updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(user))
    setIsEdit(false)
    setName('')
    setPassword('')
    
  };
   const uploadHandler = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    if(file){
      reader.readAsDataURL(file)
            reader.onloadend = () => {
              setImage(reader.result)
            }
    }else{
      setImage('')
    }
  }
 
  return (
   <Container className="mt-5 pt-5">
    <Card style={{ width: '80rem' }} className='me-auto'>
      <Row>
        <Col className='col-5' >
      <Card.Img variant="top" src={users.image?.secure_url}  />
      </Col>
      <Col className='col-7' >
     
      <Card.Body>
        <Card.Title  className='ms-4'>Profile</Card.Title>
  
      <ListGroup className="list-group-flush w-50  m-2 ">
        <ListGroup.Item>{users.name}</ListGroup.Item>
        <ListGroup.Item>{users.email}</ListGroup.Item>
        <ListGroup.Item>{users.address}</ListGroup.Item>
        <ListGroup.Item>{users.phone}</ListGroup.Item>
      </ListGroup>
        <Link onClick={()=>setIsEdit(true)}>Update Profile</Link>
      </Card.Body>
     
      
      <div>
        {isEdit && (
          <Form className="m-4 p-3" style={{ width: '25rem' , height:'25rem' ,  borderRadius:'8px'}}>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Control
              type="text"
              placeholder="Enter UserName"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              accept  = "image/"
              onChange={uploadHandler}
            />
          </Form.Group>
          <Button className="m-3" variant="primary" type="submit" onClick={updateHandler}>
            Edit
          </Button>
          </Form>
        )}
      </div>
      </Col>
      </Row>
    </Card>

   </Container>

)}
