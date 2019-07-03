import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Button, Table } from 'reactstrap'

import "./ProductList.css";

export default class ProductList extends Component {
  state = {
    products: []
  };

  getProducts = async () => {
    return [
      { id: 1, name: "Nescafe", price: 4.2 },
      { id: 2, name: "Lipton", price: 4 },
      { id: 3, name: "Coca-Cola", price: 1.1 },
      { id: 4, name: "Sneakers", price: 0.9 },
      { id: 5, name: "Milk", price: 1.1 },
      { id: 6, name: "Eggs", price: 1.2 },
      { id: 7, name: "Sugar", price: 1.5 },
      { id: 8, name: "Brandy", price: 8.5 },
      { id: 9, name: "Apple Juice", price: 2.1 }
    ];
  };

  componentDidMount() {
    this.getProducts().then(products => {
      this.setState({
        products
      });
    });
  }

  render() {
    return (
      <>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><Button color="success">Add to Cart</Button></td>
              </tr>
              ))}
          </tbody>
        </Table>       
      </>
    );
  }
}
