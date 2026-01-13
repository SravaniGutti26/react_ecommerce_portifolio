import React, { useState } from "react";

function App() {
  // Products data
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];

  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Add to cart function
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>My E-Commerce App</h1>
        <div>Cart: {cartItems.length} items</div>
      </header>

      {/* Products */}
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="cart">
        <h3>Shopping Cart</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;