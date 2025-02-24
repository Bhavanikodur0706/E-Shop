import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/productSlice";
import { mockData } from "./assets/mockData";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from './pages/Cart'
import CheckOut from "./pages/CheckOut";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(mockData)); // ✅ Set products globally on app load
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        
      </Routes>
      <Footer />
    </>
    
  );
}

export default App;
