import React from "react";
import { Carousel, Image } from "react-bootstrap";
import MyNavbar from "../Components/MyNavbar";

export default function Home() {
    return (
        <>
            <MyNavbar />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto caroPic"
                        src="./img/rod.png"
                        alt="Fishing Rod"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark">Rods</h3>
                        <p className="text-dark">We sell fishing rods!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto h-50 caroPicReel"
                        src="./img/reel.png"
                        alt="Fishing Reel"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark">Reels</h3>
                        <p className="text-dark">We sell reels too!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto caroPic"
                        src="./img/spinner.png"
                        alt="Fishing Spinner"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark">Spinners</h3>
                        <p className="text-dark">Don't forget your tackle!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
