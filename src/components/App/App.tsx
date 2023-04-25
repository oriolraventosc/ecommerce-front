import React from "react";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "../../pages/HomePage/HomePage";
import CartPage from "../../pages/CartPage/CartPage";
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import AdminPage from "../../pages/AdminPage/AdminPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pending-orders" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
