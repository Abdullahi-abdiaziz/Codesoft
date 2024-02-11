// /src/context/ProductContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const errorMessage = {
    message: "Please check your network connection",
    status: 404
  }

  // const URL = "https://dummyjson.com/products";
  
  const URL = "https://fakestoreapi.com/products";
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(URL);
        const data = await response.json();
        setProducts(data);
        setIsLoading(false)
      } catch (error) {
        console.warn("Error fetching product data:", { errorMessage });
        setIsLoading(true); 
      }
    };

    fetchData();
  }, []); 

  return (
    <ProductContext.Provider value={{ products, isLoading, setIsLoading }}>
      {children}
    </ProductContext.Provider>
  );
};
