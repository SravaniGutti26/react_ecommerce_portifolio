import React from "react";

function Cart({ cartItems }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginTop: "20px" }}>
      <h3>Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;