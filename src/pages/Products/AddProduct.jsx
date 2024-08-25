// // AddProduct.js
// import React, { useState } from 'react';
// import "../../styles/Products.css";

// const AddProduct = () => {
//   const [productName, setProductName] = useState('');
//   const [productPrice, setProductPrice] = useState('');

//   const handleAddProduct = (e) => {
//     e.preventDefault();
//     // Add your product add logic here
//     console.log('Product Added:', { productName, productPrice });
//   };

//   return (
//     <div className="add-product">
//       <h1>Add Product</h1>
//       <form onSubmit={handleAddProduct}>
//         <div>
//           <label htmlFor="productName">Product Name:</label>
//           <input
//             type="text"
//             id="productName"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="productPrice">Product Price:</label>
//           <input
//             type="text"
//             id="productPrice"
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//           />
//         </div>
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;

// AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';
import "../../styles/Products.css";

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:6969/products/add', {
        name: productName,
        price: productPrice,
        category: category,
      });
      console.log('Product Added:', response.data);
      // Clear the form fields after successful submission
      setProductName('');
      setProductPrice('');
      setCategory('');
    } catch (error) {
      console.error('There was an error adding the product!', error);
    }
  };

  return (
    <div className="add-product">
      <h1>Add Product</h1>
      <form onSubmit={handleAddProduct}>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="productPrice">Product Price:</label>
          <input
            type="text"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
