import axios from "axios";
import MyNavbar from "../src/Components/MyNavbar";
import Home from "../src/Pages/Home";
import Catalogue from "../src/Pages/Catalogue";
import ShowItem from "./Pages/ShowItem";
import Cart from "../src/Pages/Cart";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    const [products, setProducts] = useState([]);
    const callAPI = () => {
        axios
            .get(
                "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/store/products"
            )
            .then((response) => {
                // handle success
                setProducts(response.data);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    };
    useEffect(callAPI, []);

    const [cartArray, setCartArray] = useState([]);
    // const addToCart = () => {
    //     setCartArray(cartArray);
    // };
    // useEffect(addToCart, [cartArray]);

    return (
        <>
            <Router>
                <MyNavbar cartArray={cartArray} />
                <div>
                    {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}

                    {/* current page */}
                    <Switch>
                        <Route path="/catalogue">
                            <Catalogue products={products} />
                        </Route>
                        <Route path="/item/:id">
                            <ShowItem products={products} />
                        </Route>
                        <Route path="/login">{/* <Login /> */}</Route>
                        <Route path="/Cart">
                            <Cart />
                        </Route>
                        <Route path={["/", "*"]}>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}
