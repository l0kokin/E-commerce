import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { SearchContainer, SearchInput } from "./SearchStyles";
import ProductList from "../components/ProductList";
import { ProductContext } from "../context/context";

const Search = () => {
  const { fetchProducts, filteredProducts } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <SearchContainer>
        <SearchInput placeholder="Search for products..." />
        <Link to="/search">
          <SearchIcon />
        </Link>
      </SearchContainer>
      <ProductList products={filteredProducts} />
    </>
  );
};

export default Search;
