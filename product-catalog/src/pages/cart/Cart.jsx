import React from "react";
import { useCartContext } from "../../context/CartContext";
import { ImBackward, ImCalculator } from "react-icons/im";
import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import "../../styles/cart.css";
import { FaTrash } from "react-icons/fa6";

export default function Cart() {
  const { cartItems, quantity, setQuantity, removeFromCart } = useCartContext();

  const handleDecrement = (itemId) => {
    quantity[itemId] > 1
      ? setQuantity(itemId, quantity[itemId] - 1)
      : setQuantity(itemId, quantity[itemId]);
  };

  const handleIncrement = (itemId) => {
    setQuantity(itemId, quantity[itemId] + 1);
  };

  return (
    <main className="main-cart">
      <div className="cart-header flex-space">
        <div className="title flex">
          <h4>My Cart</h4>
          <p>
            <span>{cartItems.length || 0}</span> items
          </p>
        </div>
        <div className="total-price flex">
          <h4>Total Price</h4>
          <p>
            $
            {cartItems
              .reduce(
                (total, item) =>
                  total +
                  (quantity[item.id] ? quantity[item.id] : quantity) *
                    item.price,
                0
              )
              .toFixed(2)}
          </p>
        </div>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="cart-box flex-space"
            style={{ alignItems: "center" }}
          >
            <div className="item-image">
              <img src={item.image} alt="" />
            </div>
            <div className="cart-info">
              <h5>{item.title.slice(0, 43)}...</h5>
              <p>${item.price}</p>
              <p>{item.category}</p>
            </div>
            <div className="cart-quantity">
              <div className="quantity-count">
                <TbCircleMinus
                  className="icon"
                  onClick={() => handleDecrement(item.id)}
                />
                <span style={{ userSelect: "none" }}>
                  {quantity[item.id] ? quantity[item.id] : quantity}
                </span>

                <TbCirclePlus
                  className="icon"
                  onClick={() => handleIncrement(item.id)}
                />
              </div>
            </div>

            <div className="cart-total">
              <ImCalculator className="icon" />
              <span>
                $
                {quantity[item.id]
                  ? (quantity[item.id] * item.price).toFixed(2)
                  : (quantity || 0) * item.price.toFixed(2)}
              </span>
            </div>

            <div className="cart-trash">
              <FaTrash onClick={() => removeFromCart(item.id)} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex-space">
        <Link to="/products" className="flex-space backward">
          <ImBackward /> Back to Shopping
        </Link>
        {cartItems.length > 0 && (
          <button className="payment">Proceed Payment</button>
        )}
      </div>
    </main>
  );
}
