// Style Imports
import React, { useState } from 'react'
import  { Navbar, Nav, Button } from 'react-bootstrap';
import '../Styles/navStyles.css';
import Home from './Home'
import LogIn from './LogIn'
import SignUp from './SignUp'

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
  } from "react-router-dom";

export default function NavBar( {homePage} ) {
    const [onHomePage, setOnHomePage] = useState(homePage)

    return (
        <Router>
        <Navbar bg="dark" expand="lg" className="navbar-custom">
            <Navbar.Brand href="#" style={{color: "white", fontWeight: "bold", fontSize: "1.2rem", padding: "1.2rem"}} className="nav-title">CompareIt</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Item>
                        <Link to="/SignUp">
                            <Button>
                                Sign Up
                            </Button> 
                        </Link>  
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/LogIn">
                            <Button>
                                Login
                            </Button> 
                        </Link>                    
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Switch>
         <Route path = "/Home" component = {Home} />
         <Route path = "/LogIn" component = {LogIn} />
         <Route path = "/SignUp" component = {SignUp} />
        </Switch>
   </Router>
    )
}
