import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/HomePages/Home";
import OurStory from "./Components/OurStoryPage/ourStory";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import ContactUs from "./Components/contactPage/ContactUs";
import Gifts from "./Components/CollectionPages/Gifts";
import ShopPage from "./Components/CollectionPages/ShopPage";
import Login from "./Components/AccountPages/Login";
import SignUp from "./Components/AccountPages/SignUp";
import Faq from "./Components/FaqPage/Faq";
import BulkOrder from "./Components/BulkOrder/BulkOrder";
import Cart from "./Components/Cart/Cart";
import TermsConditions from "./Components/TermsCon/TermsandCon";
import PurchaseOrderForm from "./Components/PurchasePayment/PurchaseOrderForm";
import Admin from "./Components/Admin/Admin";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);  // This will trigger a re-render of the NavBar
  };
  return (
    <>
      <Router>
        <NavBar isLoggedIn={isLoggedIn} />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/OurStory" element={<OurStory />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Candles" element={<Gifts />} />
            <Route path="/product/:id" element={<ShopPage />} />
            <Route path="/Login" element={<Login  onLoginSuccess={handleLoginSuccess}  />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path='/Faq' element={<Faq/>}></Route>
            <Route path='/BulkOrder' element={<BulkOrder/>}></Route>
            <Route path="/Cart" element={<Cart />} />
            <Route path="/TermsandCon" element={<TermsConditions />} />
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/PurchaseOrderForm/:id" element={<PurchaseOrderForm />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}

export default App;
