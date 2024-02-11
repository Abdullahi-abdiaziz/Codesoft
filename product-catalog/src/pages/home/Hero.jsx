import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
import { ShimmerContentBlock, ShimmerPostItem } from "react-shimmer-effects";
import "../../styles/hero.css";

export default function Hero() {
  const { products } = useProductContext();
  const [randomProduct, setRandomProduct] = useState(null);

  useEffect(() => {
    const getRandomProduct = () => {
      setRandomProduct(products[Math.floor(Math.random() * products.length)]);
    };

    getRandomProduct();
  }, [products]);

  return (
    <main className="main-hero">
      {randomProduct ? (
        <>
          <div className="hero-content">
            <h4>
              <span>/</span> {randomProduct.category}
            </h4>
            <h2>{randomProduct.title}</h2>
            <p>{randomProduct.description}</p>
            <Link to={`products/${randomProduct.id}`}>
              <button>Buy this</button>
            </Link>
          </div>
          <div className="hero-img">
            <img src={randomProduct.image} alt="" />
          </div>
        </>
      ) : (
        <div
          className="main-hero"
          style={{ justifyContent: "center", gap: "5rem" }}
        >
          <ShimmerContentBlock
            card
            title
            text
            cta
            contentCenter
            thumbnailWidth={620}
            thumbnailHeight={700}
          />
        </div>
      )}
      {/* <div className="hero-img">
        <ShimmerPostItem card imageWidth={320} />
      </div> */}
    </main>
  );
}
