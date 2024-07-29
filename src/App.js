import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/HomePages/Home';
import OurStory from './Components/OurStoryPage/ourStory';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import ContactUs from './Components/contactPage/ContactUs';
import Gifts from './Components/CollectionPages/Gifts';
import ShopPage from './Components/CollectionPages/ShopPage';
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
           <Route path='/Collections' element={<Gifts/>} />
           <Route path="/product" element={<ShopPage/>}/>
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
    </>
  );
}
 
export default App;   
