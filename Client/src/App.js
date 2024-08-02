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
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/OurStory" element={<OurStory />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Collections" element={<Gifts />} />
            <Route path="/product" element={<ShopPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path='/Faq' element={<Faq/>}></Route>
            <Route path='/BulkOrder' element={<BulkOrder/>}></Route>
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}

export default App;
