import axios from "axios";
import Home from "../src/Pages/Home";
import Catalogue from "../src/Pages/Catalogue";
import ShowItem from "./Pages/ShowItem";
import Cart from "../src/Pages/Cart";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
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
