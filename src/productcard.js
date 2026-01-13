import React from "react";

function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "150px" }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;