import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyNavbar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    React Bootstrap
                </Navbar.Brand>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link activeClassName={"active"} as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link
                        activeClassName={"active"}
                        as={Link}
                        to="/Products"
                    >
                        Products
                    </Nav.Link>
                    <Nav.Link activeClassName={"active"} as={Link} to="/Login">
                        Login
                    </Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
