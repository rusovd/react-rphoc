import React, { Component } from "react";
import ProductList from "../ProductList";
import ProductTable from "../ProductTable";
import { BrowserRouter as Router, Route } from  'react-router-dom' 
import NavBar from "../NavBar"

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/ProductList" component={ProductList}></Route>
        <Route path="/ProductTable" component={ProductTable}></Route>
      </Router>
    );
  }
}
