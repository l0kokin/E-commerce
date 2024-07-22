import React, { createContext, useState, useEffect } from "react";

const BASE_URL = "https://fakestoreapi.com/products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [context, setContext] = useState({
    products: [],
    categories: [],
    loading: true,
    fetchProducts: () => {},
    fetchCategories: () => {},
    filterProducts: () => {},
    fetchByCategory: () => {},
  });

  useEffect(() => {
    setContext((ctx) => {
      return {
        ...ctx,
        fetchProducts,
        fetchCategories,
        filterProducts,
        fetchByCategory,
      };
    });
  }, []);

  const fetchProducts = () => {
    setContext((ctx) => ({ ...ctx, loading: true }));
    fetch(`${BASE_URL}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Products fetched:", data);
        setContext((ctx) => {
          return {
            ...ctx,
            products: data,
            filteredProducts: data,
            loading: false,
          };
        });
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  const fetchByCategory = (category) => {
    setContext((ctx) => ({ ...ctx, loading: true }));
    fetch(`${BASE_URL}/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Products fetched:", data);
        setContext((ctx) => {
          return {
            ...ctx,
            products: data,
            filteredProducts: data,
            loading: false,
          };
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

  const filterProducts = (userInput) => {
    setContext((ctx) => {
      const filtered = ctx.products.filter((product) =>
        product.title.toLowerCase().includes(userInput.toLowerCase())
      );

      return { ...ctx, products: filtered };
    });
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};
