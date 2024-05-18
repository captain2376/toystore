import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrls from '../../utils/apiUrls'; // Adjust the path to apiUrls

export const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(apiUrls.viewProducts);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h2>Product Details</h2>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.pname}</td>
              <td>{product.pimage}</td>
              <td>{product.price}</td>
              <td>{product.pdescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProducts;
