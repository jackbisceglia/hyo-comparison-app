import React, { Component } from 'react';

// Style Imports
import '../Styles/comparisonCard.css';
import { Button, Card } from 'react-bootstrap';

export default function ComparisonCard({ site, item, price, img}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{site}</Card.Title>
                <Card.Text>
                    The {item} is ${price} at {site}
                </Card.Text>
                {/* Dont know how to put link into here yet im sure its simple */}
                <Button variant="outline-primary">To page</Button>
            </Card.Body>
        </Card>
    );
}