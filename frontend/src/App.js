import React, { Component } from 'react';
import './Styles/App.css';
import ComparisonCard from './ComparisonCard'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Comparison App</h1>
        <div>
          <ComparisonCard site="amazon" url="amazon.com" price="7.00"/> <br />
          <ComparisonCard site="ebay" url="ebay.com" price="12.00"/> <br />
          <ComparisonCard site="walmart" url="walmart.com" price="8.00"/> <br />
        </div>
      </div>
      
    );
  }
}

export default App;
