import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyNavbar(props) {
    console.log(props);
    return (
        <Navbar>
            <Container className="bg bg-transparent fw-bold">
                <Navbar.Brand as={Link} to="/home">
                    <img
                        alt="Cat Steve's Logo"
                        src="./img/CatSteves.png"
                        width="200"
                        height="200"
                        className="d-inline-block align-top"
                    />{" "}
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link
                        activeClassName={"active"}
                        as={Link}
                        to="/catalogue"
                    >
                        Products
                    </Nav.Link>
                    <Nav.Link activeClassName={"active"} as={Link} to="/Cart">
                        {`Cart: ${props.cartArray.length} Items`}
                    </Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Welcome, <a href="#login">Andrew Mills</a>
                    </Navbar.Text>
                    {"||"}
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
