import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MyNavbar from "../Components/MyNavbar";

//pull individual product when clicked on view item and add it to card to display here
export default function Item() {
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
