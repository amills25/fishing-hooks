import "./App.css";
import Home from "../src/Pages/Home";
import Catalogue from "../src/Pages/Catalogue";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/catalogue">Products</Link>
                        </li>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        <li>
                            <Link to="/Cart">Cart</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

                {/* current page */}
                <Switch>
                    <Route path="/catalogue">
                        <Catalogue />
                    </Route>
                    <Route path="/login">{/* <Login /> */}</Route>
                    <Route path="/Cart">{/* <Cart /> */}</Route>
                    <Route path={["/", "*"]}>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
