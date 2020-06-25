import React, { Component } from 'react';

// Style Imports
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Button, FormControl, InputGroup, CardDeck} from 'react-bootstrap';

// Component Imports
import ComparisonCard from './Components/ComparisonCard';


export default function App() {
  return (
    <Container fluid>
      <Row>
        <br></br>
      </Row>
      <Row>
        <Col></Col>
        {/* start header */}
        <Col><h1><center>Comparison App</center></h1></Col>
        {/* end header */}
        <Col></Col>
      </Row>
      <Row>
        <br></br>
        <br></br>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={6}>
          {/* start enter product bar */}
          <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Product Name"
            aria-label="Enter Product Name"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Submit</Button>
          </InputGroup.Append>
          </InputGroup>
          {/* end enter product bar */}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <br></br>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={10}>
          {/* start cards */}
          <CardDeck>
            {/* We Pass the variables from backedn into here */}
            <ComparisonCard site="Amazon" url="amazon.com" price="7.00" item="lego set" img="https://lh3.googleusercontent.com/proxy/zt1C3t26VJyaKsj-RO1Gp9IUck1CYCmY2rBsjHy07Op1SNTV1e9mx7BNYhEkbXAh8xa5g1GJYMReb7VNLqAuXXidBeT5aKOJ_zZXpt4audm6bOk8G5HpApzFhrdvuKnFjDKU59ebm0ZyV_JvCHxb_O9C3yr3B54"/> <br />
            <ComparisonCard site="Ebay" url="ebay.com" price="12.00" item="lego set" img="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/ebay-512.png"/> <br />
            <ComparisonCard site="Walmart" url="walmart.com" price="8.00" item="lego set" img="https://www.bocaratontribune.com/wp-content/uploads/2020/06/walmart-logo.jpg"/> <br />
          </CardDeck>
          {/* end cards */}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <br></br>
      </Row>
    </Container>
    
  );
};
