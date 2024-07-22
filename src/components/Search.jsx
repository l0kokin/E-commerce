import React, { useContext, useEffect } from "react";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { SearchContainer, SearchInput } from "./SearchStyles";
import ProductList from "../components/ProductList";
import { ProductContext } from "../context/context";

const Search = () => {
  const { fetchProducts, filterProducts } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <SearchContainer>
        <SearchInput
          placeholder="Search for products..."
          onChange={(e) => {
            filterProducts(e.target.value);
            console.log(e);
          }}
        />
        <SearchIcon />
      </SearchContainer>
      <ProductList />
    </>
  );
};

export default Search;
