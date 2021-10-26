import React from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Catalogue() {
    return (
        <div>
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 52 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="holder.js/100px160"
                                />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </Card.Text>
                                    <Button variant="flush">View Item</Button>{" "}
                                    <Button variant="flush">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
