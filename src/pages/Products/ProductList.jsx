// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/Products.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:6969/products/list');
        setProducts(response.data);
      } catch (error) {
        console.error('There was an error fetching the product list!', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <p>Here you can see the list of all products.</p>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.category} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
