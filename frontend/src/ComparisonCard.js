import React, { Component } from 'react';
import './Styles/ComparisonCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ComparisonCard extends Component{
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.site}</Card.Title>
                    <Card.Text>
                        The {this.props.item} is ${this.props.price} at {this.props.site}
                    </Card.Text>
                    {/* Dont know how to put link into here yet im sure its simple */}
                    <Button variant="outline-primary">To page</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default ComparisonCard;