import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
      <ToastContainer position="top-right" closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="dark" autoClose={2000} hideProgressBar={false} newestOnTop={false} rtl={false} />
    </BrowserRouter>
  );
}

export default App;
