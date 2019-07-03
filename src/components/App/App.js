import React, { Component } from "react";
import ProductList from "../ProductList";
import ProductTable from "../ProductTable";
import ProductData from "../ProductData";
import withProductData from "../withProductData";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../NavBar";

import "./App.css";

export default class App extends Component {
  render() {
    // Wrap ProductList, ProductTable to get the higher order components
    const ProductListWithData = withProductData(ProductList);
    const ProductTableWithData = withProductData(ProductTable);

    return (
      <Router>
        <NavBar />
        {/********* Render Props *********/}
        <Route
          path="/ProductList"
          render={() => (
            <ProductData
              render={({ products }) => <ProductList products={products} />}
            />
          )}
        />
        <Route
          path="/ProductTable"
          render={() => (
            <ProductData
              render={({ products }) => <ProductTable products={products} />}
            />
          )}
        />
        {/*------------------------------*/}

        

        {/********* Render Props *********/}
        <Route
          path="/ProductListWithHOC"
          component={ProductListWithData}          
        />
        <Route
          path="/ProductTableWithHOC"
          component={ProductTableWithData}         
        />
        {/*------------------------------*/}
      </Router>
    );
  }
}
