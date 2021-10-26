import axios from "axios";
import Home from "../src/Pages/Home";
import Catalogue from "../src/Pages/Catalogue";
import ShowItem from "./Pages/ShowItem";
import Cart from "../src/Pages/Cart";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
    const [cartArray, setCartArray] = useState([]);

    const [product, setProduct] = useState([]);
    // const [image, setImage] = useState("image url");
    // const [name, setName] = useState("Bait or Tackle Item");
    // const [price, setPrice] = useState("5");
    // const [description, setDescription] = useState("This item helps me fish");
    const callAPI = () => {
        axios
            .get(
                "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/store/products"
            )
            .then((response) => {
                // handle success
                setProduct(response.data);
                <Catalogue key={product.data} product={product} />;
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    };
    useEffect(callAPI, []);

    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}

                {/* current page */}
                <Switch>
                    <Route path="/catalogue">
                        <Catalogue />
                    </Route>
                    <Route path="/item">
                        <ShowItem />
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
    );
}
