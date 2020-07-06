import React, { useState } from "react";
import { Button, Form, Card, Row, Col} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link,
    Route,
    LinkContainer
  } from "react-router-dom";

export default function LogIn(){

    //Functions and info that may be useful in the future ?
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }  

        return (
            <Router>
            <Row>
                <Col>
                </Col>
                <Col>
                    <Card classname="my-auto">
                        <Card.Body>
                            <Card.Title>
                                Log In
                            </Card.Title>
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="outline-secondary" to="/">
                            Back
                        </Button>
                         {' '} {' '}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                </Col>
            </Row>
            </Router>
            
        );
    }