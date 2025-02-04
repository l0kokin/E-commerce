import React, { useContext } from "react";
import { Card, trimString } from "./ProductCardStyles";
import { ButtonYellow } from "./CategoryListStyles";
import { ProductContext } from "../context/context";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart, deleteFromCart, cart } = useContext(ProductContext);
  const isInCart = cart.some((cartItem) => cartItem.id === product.id);

  return (
    <Card>
      <Link
        to={`/product/${product.id}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>{trimString(product.title, 3)}</h3>
        <p>{trimString(product.description, 8)}</p>
        <img src={product.image} alt={product.title} />
        <span>${product.price}</span>
      </Link>
      {!isInCart ? (
        <ButtonYellow onClick={() => addToCart(product)}>
          Add to Cart
        </ButtonYellow>
      ) : (
        <ButtonYellow onClick={() => deleteFromCart(product)}>
          Delete from Cart
        </ButtonYellow>
      )}
    </Card>
  );
};

export default ProductCard;
