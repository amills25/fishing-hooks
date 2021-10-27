import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MyNavbar from "../Components/MyNavbar";
import { useParams } from "react-router-dom";

//pull individual product when clicked on view item and add it to card to display here
export default function Item(props) {
    const { id } = useParams();
    const oneItem = props.products.find((item) => item.id === parseInt(id));

    return (
        <>
            <MyNavbar />
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={oneItem?.image} />
                    <Card.Title>{oneItem?.name}</Card.Title>
                    <Card.Subtitle>{oneItem?.price}</Card.Subtitle>
                    <Card.Text>{oneItem?.description}</Card.Text>
                    {/* onClick={addToCart} */}
                    <Button variant="flush">Add to Cart</Button>
                </Card.Body>
            </Card>
        </>
    );
}
