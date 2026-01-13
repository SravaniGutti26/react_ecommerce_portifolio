import React from "react";

function Header({ cartItemCount }) {
  return (
    <header style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "10px 20px", 
      backgroundColor: "#007bff", 
      color: "white" 
    }}>
      <h1>My E-Commerce App</h1>
      <div>
        Cart: <strong>{cartItemCount}</strong> items
      </div>
    </header>
  );
}

export default Header;