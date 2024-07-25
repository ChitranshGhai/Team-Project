import react from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/HomePages/Home';
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
