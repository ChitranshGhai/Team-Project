import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'


function Sidebar() {

  return (
    <div className='Sidebar'>

      <Link className='Side-Panel' to='/'>
        <i className="bi bi-plus-circle" style={{margin:10, fontSize:25}}></i>
        <p style={{margin:0}}>Add Products</p>
      </Link>

      <Link className='Side-Panel' to='/ShowProducts'>
        <i className="bi bi-card-list" style={{margin:10, fontSize:25}}></i>
        <p style={{margin:0}}>Products List</p>
      </Link>

      {/* <Link className='Side-Panel' to='/ShowOrders'>
        <i className="bi bi-card-list" style={{margin:10, fontSize:25}}></i>
        <p style={{margin:0}}>Orders</p>
      </Link> */}

    </div>
  )
}

export default Sidebar
