import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back</Link>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
