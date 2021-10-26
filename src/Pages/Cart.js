import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MyNavbar from "../Components/MyNavbar";

export default function Cart() {
    return (
        <>
            <MyNavbar />
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        Product Name from API
                                    </Card.Title>
                                    <Card.Subtitle>
                                        Product Price from API
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Product Description from API
                                    </Card.Text>
                                    <Button variant="flush">View Item</Button>{" "}
                                    <Button variant="flush">
                                        Remove from Cart
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
