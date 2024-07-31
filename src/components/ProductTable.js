// src/components/ProductTable.js
import React from 'react';
import './ProductTable.css';

function ProductTable() {
  const products = Array.from({ length: 10 }, (_, index) => ({
    name: 'Product Name',
    category: 'Category',
    noOfProducts: 15,
    taxId: 'ID223890',
    dateAdded: '12 November 2023',
  }));

  return (
    <div className="product-table">
      <div className="table-header">
        <input type="text" placeholder="Search Here..." />
        <button className="filter-button">Filter</button>
        <button className="add-product-button">Add Product</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>No. of Products</th>
            <th>Tax Id</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.noOfProducts}</td>
              <td>{product.taxId}</td>
              <td>{product.dateAdded}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>Number of rows</span>
        <select>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
        <div className="page-nav">
          <button>Previous</button>
          <button>1</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
