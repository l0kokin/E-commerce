import React, { useContext } from "react";
import { ProductContext } from "../context/context";
import ProductCard from "../components/ProductCard";
import { ProductsContainer } from "../components/ProductListStyles";
import { CartContainer } from "./CartPageStyles";

const CartPage = () => {
  const { cart } = useContext(ProductContext);

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      <ProductsContainer isEmpty={cart.length === 0}>
        {cart.length > 0 ? (
          cart.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h2>
            Your cart is empty. Go to products page and choose something you
            like.
          </h2>
        )}
      </ProductsContainer>
    </CartContainer>
  );
};

export default CartPage;
