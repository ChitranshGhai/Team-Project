import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/HomePages/Home';
import OurStory from './Components/OurStoryPage/ourStory';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/OurStory" element={<OurStory/>}></Route>
        <Route></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}
 
export default App;
