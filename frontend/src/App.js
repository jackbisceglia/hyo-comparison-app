import React, { useState }from 'react';

// Style Imports
//import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Button, FormControl, InputGroup, CardDeck} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Component Imports
import CardList from './Components/CardList';
import Navbar from './Components/NavBar';
import Home from './Components/Home';


export default function App() {
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
    <div>
      <Home />
    </div>
  );
};
