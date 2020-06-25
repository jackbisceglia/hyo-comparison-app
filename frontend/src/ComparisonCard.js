import React, { Component } from 'react';
import './Styles/comparisonCard.css';

class ComparisonCard extends Component{
    render() {
        return (
            <div className="ComparisonCard">
            <table>
                <tbody>
                    {this.props.site} <br />
                    {this.props.url} <br />
                    {this.props.price} <br />
                </tbody>
            </table>
            </div>
        );
    }
}

export default ComparisonCard;