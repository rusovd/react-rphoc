import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Button, Table } from 'reactstrap'

import "./ProductList.css";

const ProductList = ({ products }) => {
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

          {products && products.map(product => (
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

export default ProductList