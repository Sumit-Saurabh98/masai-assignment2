import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <img src={product.thumbnail} alt={product.title} width="150" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}
