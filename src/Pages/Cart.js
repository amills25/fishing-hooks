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
                <Container className="border-bottom border-dark">
                    {props.cartArray.map((product, idx) => (
                        <Row
                            key={idx}
                            className="border-top border-dark align-items-center"
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
                </Container>
            ) : (
                // <Container className="text-center">
                //     <Row xs={1} md={3} className="g-4">
                //         {props.cartArray.map((product, idx) => (
                //             <Col key={idx}>
                //                 <Card className="h-100">
                //                     <Card.Body>
                //                         <Card.Img
                //                             variant="top"
                //                             src={product.image}
                //                         />
                //                         <Card.Title>{product.name}</Card.Title>
                //                         <Card.Subtitle>
                //                             ${product.price}
                //                         </Card.Subtitle>
                //                         {/* <Card.Text>
                //                             {product.description}
                //                         </Card.Text> */}
                //                         <br></br>
                // <Button
                //     as={Link}
                //     to={`/item/${product.id}`}
                //     variant="flush"
                // >
                //     View Item
                // </Button>
                // {" || "}
                // <Button
                //     variant="flush"
                //     onClick={() =>
                //         props.removeFromCart(product.id)
                //     }
                // >
                //     Remove from Cart
                // </Button>
                //                     </Card.Body>
                //                 </Card>
                //             </Col>
                //         ))}
                //     </Row>
                // </Container>
                <Container className="display-2 text-center">
                    Your cart is empty.
                </Container>
            )}
            <br></br>
        </>
    );
}
