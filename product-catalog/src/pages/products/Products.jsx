import React, { useState, useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import { FaAngleRight } from "react-icons/fa6";
import { ShimmerPostItem } from "react-shimmer-effects";

const Products = () => {
  const { products, isLoading, setIsLoading } = useProductContext();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const filtered =
      selectedCategory === ""
        ? products
        : products.filter((item) => item.category === selectedCategory);
    setFilteredData(filtered);
  }, [selectedCategory, products]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main className="main-products">
      <nav className="nav">
        <a
          onClick={() => handleCategoryClick("")}
          className={selectedCategory === "" ? "active" : ""}
        >
          All
        </a>
        <FaAngleRight />
        <a
          onClick={() => handleCategoryClick("women's clothing")}
          className={selectedCategory === "women's clothing" ? "active" : ""}
        >
          Women
        </a>
        <FaAngleRight />
        <a
          onClick={() => handleCategoryClick("men's clothing")}
          className={selectedCategory === "men's clothing" ? "active" : ""}
        >
          Men
        </a>
        <FaAngleRight />
        <a
          onClick={() => handleCategoryClick("jewelery")}
          className={selectedCategory === "jewelery" ? "active" : ""}
        >
          Jewelery
        </a>
        <FaAngleRight />
        <a
          onClick={() => handleCategoryClick("electronics")}
          className={selectedCategory === "electronics" ? "active" : ""}
        >
          Electronics
        </a>
      </nav>
      <div className="products">
        {filteredData.map((product) => (
          <>
            {isLoading ? (
              <div>
                <ShimmerPostItem
                  key={product.id}
                  card
                  title
                  cta
                  imageType="thumbnail"
                  imageWidth={220}
                  imageHeight={200}
                  j
                  contentCenter
                />
              </div>
            ) : (
              <ProductCard
                key={product.id}
                product={product}
                isLoading={isLoading}
              />
            )}
          </>
        ))}
      </div>
    </main>
  );
};

export default Products;
