import React, { useState } from "react";
import { Button, Form, Card, Col, Row} from "react-bootstrap";

export default function SignUp() {

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
            <Row>
                <Col>
                </Col>
                <Col>
                    <Card classname="my-auto">
                    <Card.Body>
                    <Card.Title>
                        Sign Up
                    </Card.Title>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="outline-secondary">
                        Back
                    </Button> {' '} {' '}
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
            
        );
    }

