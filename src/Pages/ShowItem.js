import React from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

//pull individual product when clicked on view item and add it to card to display here
export default function Item(props) {
    const { id } = useParams();
    const oneItem = props.products.find((item) => item.id === parseInt(id));

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={oneItem?.image} />
                    <Card.Title>{oneItem?.name}</Card.Title>
                    <Card.Subtitle>{oneItem?.price}</Card.Subtitle>
                    <Card.Text>{oneItem?.description}</Card.Text>
                    <Button
                        onClick={() => props.addToCart(oneItem.id)}
                        variant="flush"
                    >
                        Add to Cart
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
}
