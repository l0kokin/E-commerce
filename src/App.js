import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Search from "./components/Search";
import { ProductProvider } from "./context/context";
import SubscribePage from "./pages/SubscribePage";
import Footer from "./components/Footer";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import ScrollToTop from "./components/ScrollToTop";
import ProductItemPage from "./pages/ProductItemPage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<Search />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/" element={<CategoryList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductItemPage />} />
        </Routes>
        <Footer />
      </ProductProvider>
    </Router>
  );
};

export default App;
