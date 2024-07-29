import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/HomePages/Home';
import OurStory from './Components/OurStoryPage/ourStory';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurStory" element={<OurStory />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
    </>
  );
}
 
export default App;   
