import React, { useState } from 'react';

// Style Imports
import '../Styles/comparisonCard.css';
import { Button, Card } from 'react-bootstrap';

export default function ComparisonCard({ site, item, price, img}) {

    return (
        <Card 
            className={"cardcustom pt-2 d-block h-100 ml-3 mr-3"} 
            appear={true}
        >
            <Card.Img variant="top" src={img} style={{maxWidth: '30%'}}/>
            <Card.Body>
                <Card.Title>{site}</Card.Title>
                <Card.Text>
                    {item.replace(/^./, item[0].toUpperCase())}: <b className="text-dark">${price}</b> at {site}
                </Card.Text>
                {/* Dont know how to put link into here yet im sure its simple */}
            </Card.Body>
        </Card>
    );
}