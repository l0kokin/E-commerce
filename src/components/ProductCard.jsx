import React from "react";
import { Card, trimString } from "./ProductCardStyles";
import { ButtonYellow } from "./CategoryListStyles";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <h3>{trimString(product.title, 3)}</h3>
      <p>{trimString(product.description, 8)}</p>
      <img src={product.image} alt={product.title} />
      <span>${product.price}</span>
      <ButtonYellow>Add to Cart</ButtonYellow>
    </Card>
  );
};

export default ProductCard;
