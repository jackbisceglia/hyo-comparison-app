import React from 'react';

// Style Imports
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Button, FormControl, InputGroup, CardDeck} from 'react-bootstrap';

// Component Imports
import ComparisonCard from './Components/ComparisonCard';
import Navbar from './Components/NavBar';


export default function App() {

  return (
    <>
    <Navbar homePage={true}/>
    <Container fluid className="h-100">
      <Row>
        <Col xs={4} className="mx-auto m-5">
          {/* start enter product bar */}
          <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Product Name"
            aria-label="Enter Product Name"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-primary">Submit</Button>
          </InputGroup.Append>
          </InputGroup>
          {/* end enter product bar */}
        </Col>
      </Row>
      <Row className="mx-auto pl-5 pr-5">
        <Col className="text-center pl-5 pr-5 w-100">
          {/* start cards */}
          <CardDeck className="mx-auto h-100 pt-4 pb-4 w-100" >
            {/* We Pass the variables from backedn into here */}
            <ComparisonCard site="Amazon" url="amazon.com" price="7.00" item="lego set" img="https://lh3.googleusercontent.com/proxy/zt1C3t26VJyaKsj-RO1Gp9IUck1CYCmY2rBsjHy07Op1SNTV1e9mx7BNYhEkbXAh8xa5g1GJYMReb7VNLqAuXXidBeT5aKOJ_zZXpt4audm6bOk8G5HpApzFhrdvuKnFjDKU59ebm0ZyV_JvCHxb_O9C3yr3B54"/> 
            <ComparisonCard site="Ebay" url="ebay.com" price="12.00" item="lego set" img="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/ebay-512.png"/> 
            <ComparisonCard site="Walmart" url="walmart.com" price="8.00" item="lego set" img="https://www.bocaratontribune.com/wp-content/uploads/2020/06/walmart-logo.jpg"/> 
          </CardDeck>
          {/* end cards */}
        </Col>
      </Row>
    </Container>
    </>
  );
};
