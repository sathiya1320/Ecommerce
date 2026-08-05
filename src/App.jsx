import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import ProductList from "./component/ProductList/ProductList";
import Footer from "./component/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <ProductList />
    </>
  );
}

function Contact() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Contact Us</h1>
      <p>Email: support@minishop.com</p>
      <p>Phone: +91 9876543210</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;