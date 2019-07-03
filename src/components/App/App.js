import React, { Component } from "react";
import ProductList from "../ProductList";
import ProductTable from "../ProductTable";
import ProductData from "../ProductData";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../NavBar";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route
          path="/ProductList"
          render={() => (
            <ProductData
              render={({ products }) => 
                <ProductList products={products} />}
            />
          )}
        />
        <Route
          path="/ProductTable" 
          render={() => (
            <ProductData
              render={({ products }) => 
                <ProductTable products={products} />}
            />
          )}
        />
      </Router>
    );
  }
}
