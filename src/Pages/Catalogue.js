import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MyNavbar from "../Components/MyNavbar";
import { Link } from "react-router-dom";

export default function Catalogue(props) {
    const addToCart = () => {
        props.setCartArray(props.cartArray);
    };
    useEffect(addToCart, [props.cartArray]);
    console.log(addToCart);
    return (
        <>
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {props.products.map((product, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Subtitle>
                                        {product.price}
                                    </Card.Subtitle>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Button
                                        as={Link}
                                        to={`/item/${product.id}`}
                                        variant="flush"
                                    >
                                        View Item
                                    </Button>{" "}
                                    <Button onClick={addToCart} variant="flush">
                                        Add to Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
