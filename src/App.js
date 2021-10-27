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
    const addToCart = (id) => {
        setCartArray((prevCart) => {
            const found = products.find((item) => item.id === id);
            //to do: don't add new found item every time if one already exists in the cart, increment value in cart object

            return [...prevCart, found];
        });
    };
    const removeFromCart = (id) => {
        let newCart = cartArray.filter((item, i) => {
            if (item.id !== id) {
                return item;
            }
        });
        setCartArray(newCart);
        //to do: don't add new found item every time if one already exists in the cart, increment value in cart object
    };

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
                            <Catalogue
                                products={products}
                                addToCart={addToCart}
                            />
                        </Route>
                        <Route path="/item/:id">
                            <ShowItem
                                products={products}
                                addToCart={addToCart}
                            />
                        </Route>
                        <Route path="/login">{/* <Login /> */}</Route>
                        <Route path="/Cart">
                            <Cart
                                cartArray={cartArray}
                                removeFromCart={removeFromCart}
                            />
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
