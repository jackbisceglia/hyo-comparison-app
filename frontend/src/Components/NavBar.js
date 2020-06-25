import React, { useState } from 'react'

// Style Imports
import  { Navbar, Nav } from 'react-bootstrap';
import '../Styles/navStyles.css';

export default function NavBar( {homePage} ) {
    const [onHomePage, setOnHomePage] = useState(homePage)

    return (
        <Navbar bg="dark" expand="lg" className="navbar-custom">
            <Navbar.Brand href="#" style={{color: "white", fontWeight: "bold", fontSize: "1.2rem"}} className="nav-title">CompareIt</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Item>
                        <Nav.Link className="custom-nav-item" href="/" style={{color: "#41E0FD"}}>Account</Nav.Link>                    
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
