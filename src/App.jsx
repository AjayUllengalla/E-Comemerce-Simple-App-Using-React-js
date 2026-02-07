import "./App.css";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import ProductDetails from "./components/ProductDetails";
import Register from "./Registrations/Register";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AdminDashBoard from "./components/AdminDashBoard";
import AddProduct from "./components/AddProduct";
import InventoryManagement from "./components/InventoryManagement";
import Cart from "./cart/Cart";
import { ToastContainer } from "react-toastify";

function AppContent() {
  const location = useLocation();

  // Hide header on login/register page
  const hideHeader = location.pathname === "/";

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminDashBoard />}>
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="inventory" element={<InventoryManagement />} />
        {/* <Route path="addproduct/:id" element={<AddProduct />} /> */}
        </Route>
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        
        
      </Routes>
      {!hideHeader && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
