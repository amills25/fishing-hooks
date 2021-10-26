import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MyNavbar from "../Components/MyNavbar";
import { Link } from "react-router-dom";

export default function Catalogue(product) {
    return (
        <>
            <MyNavbar />
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 52 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img
                                    key={product.image}
                                    variant="top"
                                    src={product.image}
                                />
                                <Card.Body>
                                    <Card.Title key={product.name}>
                                        {product.name}
                                    </Card.Title>
                                    <Card.Subtitle key={product.price}>
                                        {product.price}
                                    </Card.Subtitle>
                                    <Card.Text key={product.description}>
                                        {product.description}
                                    </Card.Text>
                                    <Button
                                        as={Link}
                                        to="/item"
                                        variant="flush"
                                    >
                                        View Item
                                    </Button>{" "}
                                    {/* onClick={addToCart} */}
                                    <Button variant="flush">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
