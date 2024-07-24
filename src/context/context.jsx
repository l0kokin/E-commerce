import React, { createContext, useState, useEffect } from "react";

const BASE_URL = "https://fakestoreapi.com/products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [context, setContext] = useState({
    products: [],
    originalProducts: [],
    categories: [],
    loading: true,
    cart: [],
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
        addToCart,
        deleteFromCart,
      };
    });
  }, []);

  const fetchProducts = () => {
    setContext((ctx) => ({ ...ctx, loading: true }));
    fetch(`${BASE_URL}`)
      .then((response) => response.json())
      .then((data) => {
        setContext((ctx) => {
          return {
            ...ctx,
            products: data,
            originalProducts: data,
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
        setContext((ctx) => ({
          ...ctx,
          products: data,
          filteredProducts: data,
          loading: false,
        }));
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  const fetchCategories = () => {
    fetch(`${BASE_URL}/categories`)
      .then((response) => response.json())
      .then((data) => {
        setContext((ctx) => ({
          ...ctx,
          categories: data,
        }));
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  const filterProducts = (userInput) => {
    setContext((ctx) => {
      if (userInput.trim() === "") {
        return { ...ctx, products: ctx.originalProducts };
      }

      const filtered = ctx.products.filter((product) =>
        product.title.toLowerCase().includes(userInput.toLowerCase())
      );

      return { ...ctx, products: filtered };
    });
  };

  const addToCart = (item) => {
    setContext((ctx) => {
      const isItemInCart = ctx.cart.some((cartItem) => cartItem.id === item.id);

      console.log(item);

      if (!isItemInCart) {
        return { ...ctx, cart: [...ctx.cart, item] };
      }
      return ctx;
    });
  };

  const deleteFromCart = (item) => {
    setContext((ctx) => {
      const isItemInCart = ctx.cart.some((cartItem) => cartItem.id === item.id);

      if (isItemInCart) {
        const updatedCart = ctx.cart.filter(
          (cartItem) => cartItem.id !== item.id
        );
        return { ...ctx, cart: updatedCart };
      }
      return ctx;
    });
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};
