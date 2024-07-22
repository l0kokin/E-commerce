import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ProductsContainer } from "./ProductListStyles";
import { ProductContext } from "../context/context";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductList = () => {
  const { fetchByCategory, products, loading } = useContext(ProductContext);
  const query = useQuery();
  const category = query.get("category");

  useEffect(() => {
    if (category) {
      fetchByCategory(category);
    }
  }, []);

  console.log(loading);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ProductsContainer>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsContainer>
      )}
    </>
  );
};

export default ProductList;
