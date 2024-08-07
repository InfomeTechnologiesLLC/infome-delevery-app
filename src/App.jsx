import { useState } from "react";
import Login from "./pages/login/Login";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AppBar from "./components/appBar";
import DashboardPage from "./pages/dashboard/page";
import DeliveryPage from "./pages/delivery/delivery";
import IndividualDelivery from "./pages/delivery/individual/page";
import { Toaster } from "react-hot-toast";
import UserPage from "./pages/user/page";

function App() {
  function isLoginPage() {
    return location.pathname.includes("login");
  }
  return (
    <div className="container font-poppins">
      <Toaster />
      <Routes>
        <Route exact path="/login" element={<Login />} />

        {/* <Route element={<AppBar/>}> */}
        <Route path="/dash" element={<DashboardPage />} />
        <Route path="/user" element={<UserPage />} />

        <Route path="/delivery" element={<DeliveryPage />} />
        <Route
          path="delivery/individual/:id"
          element={<IndividualDelivery />}
        />
        {/* </Route> */}
      </Routes>
      {!isLoginPage() && <AppBar />}
    </div>
  );
}

export default App;
