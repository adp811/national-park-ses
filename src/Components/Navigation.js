import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar className= "color-nav" expand="lg" variant="dark" >
            <Navbar.Brand> USA National Parks </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">

                    <Link to="/">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Link>
                    <Link to="/activities">
                        <Nav.Link href="#activities">Activites</Nav.Link>
                    </Link>
                    <Link to="/webcams">
                        <Nav.Link href="#webcams">Webcams</Nav.Link>
                    </Link>
                    <Link to="/blog">
                        <Nav.Link href="#blog">Blog</Nav.Link>
                    </Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
