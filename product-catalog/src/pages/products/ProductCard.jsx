// import React, { useState } from "react";
// import { FaArrowRight, FaCartPlus } from "react-icons/fa6";
// import { BsFillCartCheckFill } from "react-icons/bs";
// import { TbPointFilled } from "react-icons/tb";
// import { Link } from "react-router-dom";
// import { useCartContext } from "../../context/CartContext";
// import { ShimmerPostItem } from "react-shimmer-effects";
// import "../../styles/products.css";

// const ProductCard = ({ product, isLoading }) => {
//   const { addToCart, addedToCart, setAddedToCart, cartItems, setQuantity } =
//     useCartContext();
//   const [localQuantity, setLocalQuantity] = useState(1);

//   const handleAddToCart = () => {
//     if (product && !addedToCart[product.id]) {
//       addToCart(product);
//       setQuantity(product.id, localQuantity);
//       setLocalQuantity(1);
//       setAddedToCart((prev) => ({ ...prev, [product.id]: true }));
//     }
//   };

//   return (
//     <>
//       {!isLoading ? (
//         <div className="product">
//           <>
//             <div className="product-image">
//               <img src={product.image} alt="" />
//             </div>
//             <div className="product-info">
//               <div className="title-price">
//                 <p className="product-title">
//                   {product.title.length < 35
//                     ? product.title
//                     : product.title.substring(0, 37)}
//                 </p>
//                 <div className="flex">
//                   <p className="product-price">${product.price}</p>
//                   <div className="rate">
//                     <p>
//                       {`5.0 / ${product.rating.rate}`}
//                       {<TbPointFilled className="point" />} (
//                       {product.rating.count} rating)
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-space">
//                 <button
//                   className="cart"
//                   onClick={handleAddToCart}
//                   disabled={addedToCart[product.id]}
//                   style={{
//                     border: "2px solid var(--color4)",
//                     borderRadius: "6px",
//                     padding: "5px 10px",
//                   }}
//                 >
//                   {cartItems.find((item) => item.id === product.id) ? (
//                     <div
//                       className="flex"
//                       style={{
//                         gap: ".25rem",
//                         color: "var(--color4)",
//                       }}
//                     >
//                       <BsFillCartCheckFill /> Added
//                     </div>
//                   ) : (
//                     <>
//                       <FaCartPlus /> Add To Cart
//                     </>
//                   )}
//                 </button>
//                 <Link to={`/products/${product.id}`} className="more-details">
//                   more {<FaArrowRight />}
//                 </Link>
//               </div>
//             </div>
//           </>
//         </div>
//       ) : (
//         <div className="product">
//           <div>
//             <ShimmerPostItem
//               card
//               title
//               cta
//               imageType="thumbnail"
//               imageWidth={220}
//               imageHeight={200}
//               contentCenter
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default ProductCard;

import React, { useState } from "react";
import { FaArrowRight, FaCartPlus } from "react-icons/fa6";
import { BsFillCartCheckFill } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { ShimmerPostItem } from "react-shimmer-effects";
import "../../styles/products.css";

const ProductCard = ({ product, isLoading }) => {
  const { addToCart, addedToCart, setAddedToCart, cartItems, setQuantity } =
    useCartContext();
  const [localQuantity, setLocalQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const handleAddToCart = () => {
    if (product && !addedToCart[product.id]) {
      addToCart(product);
      setQuantity(product.id, localQuantity);
      setLocalQuantity(1);
      setAddedToCart((prev) => ({ ...prev, [product.id]: true }));
    }
  };

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  const renderCardContent = () => {
    return (
      <>
        <div className="product-image">
          <img src={product.image} alt="" />
        </div>
        <div className="product-info">
          <div className="title-price">
            <p className="product-title">
              {product.title.length < 35
                ? product.title
                : product.title.substring(0, 37)}
            </p>
            <div className="flex">
              <p className="product-price">${product.price}</p>
              <div className="rate">
                <p>
                  {`5.0 / ${product.rating.rate}`}
                  {<TbPointFilled className="point" />} ({product.rating.count}{" "}
                  rating)
                </p>
              </div>
            </div>
          </div>
          <div className="flex-space">
            <button
              className="cart"
              onClick={handleAddToCart}
              disabled={addedToCart[product.id]}
              style={{
                border: "2px solid var(--color4)",
                borderRadius: "6px",
                padding: "5px 10px",
              }}
            >
              {cartItems.find((item) => item.id === product.id) ? (
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
            <Link to={`/products/${product.id}`} className="more-details">
              more {<FaArrowRight />}
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {!isLoading ? (
        <div
          className={`product ${showDetails ? "expanded" : ""}`}
          onClick={showDetails ? null : handleCardClick}
        >
          {showDetails ? (
            <Link to={`/products/${product.id}`}>{renderCardContent()}</Link>
          ) : (
            renderCardContent()
          )}
        </div>
      ) : (
        <div className="product">
          <div>
            <ShimmerPostItem
              card
              title
              cta
              imageType="thumbnail"
              imageWidth={220}
              imageHeight={200}
              contentCenter
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
