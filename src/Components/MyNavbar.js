import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyNavbar() {
    return (
        <Navbar>
            <Container className="bg bg-transparent fw-bold">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="./img/CatSteves.png"
                        width="200"
                        height="200"
                        className="d-inline-block align-top"
                    />{" "}
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link activeClassName={"active"} as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link
                        activeClassName={"active"}
                        as={Link}
                        to="/catalogue"
                    >
                        Products
                    </Nav.Link>
                    <Nav.Link activeClassName={"active"} as={Link} to="/Cart">
                        Cart: 0 Items
                    </Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Go Home Keith</a>
                    </Navbar.Text>
                    <Nav>
                        <Nav.Link
                            activeClassName={"active"}
                            as={Link}
                            to="/Login"
                        >
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
