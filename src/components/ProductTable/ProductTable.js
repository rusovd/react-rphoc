import React, { Component } from "react";

class ProductTable extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    getProducts().then(products => {
      this.setState({
        products
      });
    });
  }

  handleDelete = currentProduct => {
    const remainingProducts = this.state.products.filter(
      product => product.id !== currentProduct.id
    );
    deleteProducts(currentProduct.id).then(() => {
      this.setState({
        products: remainingProducts
      });
    });
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <button onClick={() => this.handleDelete(product)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export { ProductTable };