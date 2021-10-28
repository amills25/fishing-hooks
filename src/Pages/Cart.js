import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col className="text-center display-2 fw-bold">CART</Col>
                </Row>
            </Container>
            <br></br>
            {props.cartArray.length > 0 ? (
                <Container>
                    {props.cartArray.map((product, idx) => (
                        <Row
                            key={idx}
                            className="row-bordered align-items-center"
                        >
                            <Col>
                                <Image
                                    className="myImage"
                                    src={product.image}
                                ></Image>
                            </Col>
                            <Col>
                                {product.name} <br></br>
                                <br></br> Quantity: {product.quantity}
                            </Col>
                            <Col>
                                <Button
                                    as={Link}
                                    to={`/item/${product.id}`}
                                    variant="flush"
                                >
                                    View Item
                                </Button>
                                {" || "}
                                <Button
                                    variant="flush"
                                    onClick={() =>
                                        props.removeFromCart(product.id)
                                    }
                                >
                                    Remove from Cart
                                </Button>
                            </Col>
                        </Row>
                    ))}
                    <Row>
                        <Col className="text-center display-2">
                            <Button
                                variant="dark"
                                // onClick={() => props.removeFromCart(product.id)}
                            >
                                CHECKOUT
                            </Button>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <Container className="display-2 text-center">
                    Your cart is empty.
                </Container>
            )}
            <br></br>
        </>
    );
}
