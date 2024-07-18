import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Search from "./components/Search";
import { ProductProvider } from "./context/context";
import SubscribePage from "./pages/SubscribePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<Search />} />
          <Route path="/subscribe" element={<SubscribePage />} />
        </Routes>
        <Footer />
      </ProductProvider>
    </Router>
  );
};

export default App;
