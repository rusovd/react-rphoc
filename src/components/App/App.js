import React, { Component } from "react";
import ProductList from "../ProductList";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Render Props</h1>
        <ProductList />
      </div>
    );
  }
}
