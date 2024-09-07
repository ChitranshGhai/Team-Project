import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import AddProduct from './Pages/AddProducts/AddProduct';
import ShowOrders from './Pages/ShowOrders/ShowOrders';
import ShowProducts from './Pages/ShowProducts/ShowProducts';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <div className='Add-Pages'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<AddProduct/>}></Route>
          <Route path='/ShowProducts' element={<ShowProducts/>}></Route>
          <Route path='/ShowOrders' element={<ShowOrders/>}></Route>
        </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
