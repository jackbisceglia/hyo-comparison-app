import React, { useState }from 'react';

// Style Imports
import '../Styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Button, FormControl, InputGroup, CardDeck} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Component Imports
import CardList from './CardList';
import Navbar from './NavBar';


export default function Home() {
  // State to check to display either CardList or Search Prompt
  const [itemRequested, setItemRequested] = useState(false);

  // Search Term in search bar -> updated in search bar component
  const [searchTerm, setSearchTerm] = useState('');

  // Item's states
  const [searchResults, setSearchResults] = useState([]);

  // -------- Item Search Function --------
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/search/${searchTerm}`)
    .then(res => res.json())
    .then(data => {

      
      // Test return data
      console.log(data);
      
      // UNCOMMENT WHEN SEARCH RESULTS ARE WORKING
      // setSearchResults(searchResults => [...searchResults, data]);

      setSearchTerm('');
      // Switch Pages
      setItemRequested(true);
    })
  }
  // -------- Item Search Function --------

  return (
    <>
    <Navbar homePage={true}/>
    <Container fluid className="h-100">
      <Row>
        <Col xs={4} className="mx-auto m-5">
          {/* start enter product bar */}
          <InputGroup className="mb-3">
            <FormControl
              value={searchTerm}
              placeholder="Product Name"
              aria-label="Product Name"
              aria-describedby="basic-addon2"
              onChange={(event) => {
                console.log(searchTerm)
                setSearchTerm(event.target.value)
              }}
            />
            <InputGroup.Append>
              <Button 
                variant="outline-primary"
                onClick={(event) => handleSubmit(event)}
                >Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
          {/* end enter product bar */}
        </Col>
      </Row>
      <Row className="mx-auto pl-5 pr-5">
          <Col className="text-center pl-5 pr-5 w-100">
            {itemRequested
              ?
                <CardList />
              :
                <>
                <h1 className="text-dark">Welcome to CompareIt!</h1>
                <p className="text-primary">Search an item to start comparing</p>
                </>
            }
          </Col>
        </Row>
    </Container>
    </>
  );
};