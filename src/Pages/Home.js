import React from "react";
import { Carousel } from "react-bootstrap";

export default function Home() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./img/rod.jpg"
                    alt="Fishing Rod"
                />
                <Carousel.Caption>
                    <h3>Rods</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./img/rod.jpg"
                    alt="Fishing Reel"
                />

                <Carousel.Caption>
                    <h3>Reels</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./img/spinner.jpg"
                    alt="Fishing Spinner"
                />

                <Carousel.Caption>
                    <h3>Spinners</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
