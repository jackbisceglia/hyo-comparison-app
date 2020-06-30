import React from 'react'
import { Col, Row, CardDeck} from 'react-bootstrap';
import ComparisonCard from './ComparisonCard';


export default function CardList() {
    return (
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
    )
}
