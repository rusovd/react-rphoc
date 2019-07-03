import React, { Component } from "react";

export default class ProductTable extends Component {
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

  // handleDelete = currentProduct => {
  //   const remainingProducts = this.state.products.filter(
  //     product => product.id !== currentProduct.id
  //   );
  //   deleteProducts(currentProduct.id).then(() => {
  //     this.setState({
  //       products: remainingProducts
  //     });
  //   });
  // };

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
                <button onClick={() => console.log(product)}>
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
