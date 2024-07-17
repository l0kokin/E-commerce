import React, { createContext, useState, useEffect } from "react";

const BASE_URL = "https://fakestoreapi.com/products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [context, setContext] = useState({
    products: [],
    filteredProducts: [],
    categories: [],
    fetchProducts: () => {},
    fetchCategories: () => {},
  });

  useEffect(() => {
    setContext((ctx) => {
      return {
        ...ctx,
        fetchProducts,
        fetchCategories,
        // fetchFilteredProducts,
      };
    });
  }, []);

  const fetchProducts = () => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("Products fetched:", data);
        setContext((ctx) => {
          return { ...ctx, products: data, filteredProducts: data };
        });
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  const fetchCategories = () => {
    fetch(`${BASE_URL}/categories`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Categories fetched:", data);
        setContext((ctx) => {
          return { ...ctx, categories: data };
        });
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};
