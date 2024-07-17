import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductsContainer } from "./ProductListStyles";
import { ProductContext } from "../context/context";

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsContainer>
  );
};

export default ProductList;
