import React from "react";

const ProductTable = ({ products }) => {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products && products.map(product => (
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
      </>
    );
}


export default ProductTable