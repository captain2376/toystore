import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import apiUrls from '../../utils/apiUrls'; // Adjust the path to apiUrls

export const AddProduct = () => {
  console.log(apiUrls);
  console.log(process.env.REACT_APP_BACKEND_URL);

  const [pname, setProductName] = useState('');
  const [pimage, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [pdescription, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      pname,
      pimage,
      price,
      pdescription
    };

    try {
      const response = await axios.post(apiUrls.addProduct, productData, { // Use addProduct URL from apiUrls
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Product added successfully:', response.data);
      // Optionally reset form fields or show a success message
    } catch (error) {
      console.error('Error adding product:', error);
      // Optionally show an error message
    }
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Row>
            <Col md={6}>
              <Label for="pname">Product Name</Label>
              <Input type="text" id="pname" maxLength={20} placeholder="Enter product name" 
                value={pname} onChange={(e) => setProductName(e.target.value)} />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={6}>
              <Label for="pimage">Image</Label>
              <Input type="text" id="pimage" placeholder="Enter image URL" 
                value={pimage} onChange={(e) => setImage(e.target.value)} />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={6}>
              <Label for="price">Price</Label>
              <Input type="number" id="price" placeholder="Enter price" 
                value={price} onChange={(e) => setPrice(e.target.value)} />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={6}>
              <Label for="pdescription">Description</Label>
              <Input type="text" id="pdescription" maxLength={20} placeholder="Enter description" 
                value={pdescription} onChange={(e) => setDescription(e.target.value)} />
            </Col>
          </Row>
        </FormGroup>
        <Button color="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
