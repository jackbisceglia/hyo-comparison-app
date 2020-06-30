import React, { useState }from 'react';

// Style Imports
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Button, FormControl, InputGroup, CardDeck} from 'react-bootstrap';

// Component Imports
import CardList from './Components/CardList';
import Navbar from './Components/NavBar';


export default function App() {
  // State to check to display either CardList or Search Prompt
  const [itemRequested, setItemRequested] = useState(false)

  // Function for Search Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setItemRequested(true)
  }

  return (
    <>
    <Navbar homePage={true}/>
    <Container fluid className="h-100">
      <Row>
        <Col xs={4} className="mx-auto m-5">
          {/* start enter product bar */}
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Product Name"
              aria-label="Product Name"
              aria-describedby="basic-addon2"
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
