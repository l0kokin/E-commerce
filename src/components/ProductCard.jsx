import React from "react";
import { Card, trimString } from "./ProductCardStyles";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <img src={product.image} alt={product.title} />
      <h3>{trimString(product.title, 3)}</h3>
      <p>{trimString(product.description, 8)}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </Card>
  );
};

export default ProductCard;
