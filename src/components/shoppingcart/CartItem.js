import React, { useContext } from "react";

const CartItem = ({ item, onRemoveItem }) => {
    const handleRemoveClick = () => {
      onRemoveItem(item.id);
    };
  
    return (
      <div className="cart-item">
        <div className="item-details">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
        <button onClick={handleRemoveClick}>Remove</button>
      </div>
    );
  };

  export default CartItem;
  