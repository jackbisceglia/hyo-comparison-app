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
import Home from './Components/Home';


export default function App() {

  return (

    <div>
      <Home />
    </div>
  );
};
