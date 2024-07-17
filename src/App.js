import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Search from "./components/Search";
import { ProductProvider } from "./context/context";

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<Search />} />
        </Routes>
      </ProductProvider>
    </Router>
  );
};

export default App;
