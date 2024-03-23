/**
 * @fileoverview ProductDetails component
 * @author Abdullahi Abdiaziz
 */

import React, { useEffect, useState } from "react";
import { TbCircleMinus, TbCirclePlus, TbPointFilled } from "react-icons/tb";
import { FaCalculator, FaCartPlus } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
import { ImBackward } from "react-icons/im";
import { BsFillCartCheckFill } from "react-icons/bs";

import { useProductContext } from "../../context/ProductContext";
import { useCartContext } from "../../context/CartContext";
import { Link, useParams } from "react-router-dom";
import { ShimmerContentBlock } from "react-shimmer-effects";

/**
 * ProductDetails component
 * @returns {JSX.Element} ProductDetails component
 */
const ProductDetails = () => {
  const { products, isLoading } = useProductContext();
  const { addToCart, addedToCart, setAddedToCart, cartItems, setQuantity } =
    useCartContext();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [localQuantity, setLocalQuantity] = useState(1);

  useEffect(() => {
    const productId = parseInt(id);
    const filteredProduct = products.find((item) => item.id === productId);
    setSelectedProduct(filteredProduct);
    setLocalQuantity(1);
  }, [id, products]);

  /**
   * addValue function
   */
  const addValue = () => {
    setLocalQuantity((prev) => prev + 1);
  };

  /**
   * subValue function
   */
  const subValue = () => {
    localQuantity > 0
      ? setLocalQuantity((prev) => prev - 1)
      : setLocalQuantity(0);
  };

  /**
   * handleAddToCart function
   */
  const handleAddToCart = () => {
    if (selectedProduct && !addedToCart[selectedProduct.id]) {
      addToCart(selectedProduct);
      setQuantity(selectedProduct.id, localQuantity);
      setLocalQuantity(1);
      setAddedToCart((prev) => ({ ...prev, [selectedProduct.id]: true }));
    }
  };

  return (
    <main className="product-detail">
      {selectedProduct && !isLoading ? (
        <>
          <div className="detail-img">
            <img src={selectedProduct.image} alt="" />
          </div>
          <div className="detail-info">
            <h4 className="detail-category">
              {selectedProduct.category.toUpperCase()}
            </h4>
            <h3 className="detail-title">{selectedProduct.title}</h3>
            <p className="detail-price">${selectedProduct.price}</p>
            <p className="detail-desc">{selectedProduct.description}</p>
            <div className="rate">
              <p>
                {`5.0 / ${selectedProduct.rating.rate}`}
                {<TbPointFilled className="point" />} (
                {selectedProduct.rating.count} rating)
              </p>
            </div>
            <div className="action">
              <div className="count">
                <TbCircleMinus className="icon" onClick={subValue} />{" "}
                <p className="count-value" style={{ userSelect: "none" }}>
                  {localQuantity}
                </p>
                <TbCirclePlus className="icon" onClick={addValue} />
              </div>
              <div className="calculator">
                <FaCalculator />
                <p style={{ userSelect: "none" }}>
                  {(localQuantity * selectedProduct.price).toFixed(2)}{" "}
                </p>
              </div>

              <button
                className="cart"
                onClick={handleAddToCart}
                disabled={addedToCart[selectedProduct.id]}
              >
                {cartItems.find((item) => item.id === selectedProduct.id) ? (
                  <div
                    className="flex"
                    style={{
                      gap: ".25rem",
                      color: "var(--color4)",
                    }}
                  >
                    <BsFillCartCheckFill /> Added
                  </div>
                ) : (
                  <>
                    <FaCartPlus /> Add To Cart
                  </>
                )}
              </button>
            </div>
            <div className="caution flex" style={{ marginTop: ".5rem" }}>
              {addedToCart[selectedProduct.id] && (
                <>
                  <RiErrorWarningFill />
                  <p style={{ marginLeft: ".5rem" }}>
                    go to the cart if you need to add more quantities
                  </p>
                </>
              )}
            </div>
            <Link to="/products" className="flex-space backward">
              <ImBackward /> Bac k to Shopping
            </Link>
          </div>
        </>
      ) : (
        <ShimmerContentBlock card title text cta contentCenter />
      )}
    </main>
  );
};

export default ProductDetails;
