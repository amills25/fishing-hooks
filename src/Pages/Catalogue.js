import React from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MyNavbar from "../Components/MyNavbar";

export default function Catalogue() {
    // callAPI = () => {
    //     axios
    //         .get(
    //             "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/store/products"
    //         )
    //         .then(function (response) {
    //             // handle success
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .then(function () {
    //             // always executed
    //         });
    // };

    return (
        <>
            <MyNavbar />
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 52 }).map((_, idx) => (
                        <Col>
                            <Card>
                                {/* <Card.Img
                                    variant="top"
                                    src="holder.js/100px160"
                                /> */}
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
