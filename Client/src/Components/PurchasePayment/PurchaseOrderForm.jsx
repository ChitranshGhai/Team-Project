import React from 'react'
import './PurchaseOrder.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import productimage from '../Images/gift2.jpg'


function PurchaseOrderForm() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(location.state?.product || null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!product || product._id !== id) {
      fetchProd(id);
    }
    fetchData();
  }, [id, product]);

  const fetchProd = async (id) => {
    try {
      let res = await fetch(`http://localhost:2003/getData/${id}`);
      let json = await res.json();
      setProduct(json);
    } catch (err) {
      console.error("Error in fetching product");
    }
  };
  const fetchData = async () => {
    try {
      let res = await fetch("http://localhost:2003/");
      let js = await res.json();
      setProducts(js);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className='Order-Main-Container'>
     
      <div className='Form-Container-div'>

        {/* <div className='Forgapping'></div> */}

      <form className='Payment-Form' autoComplete='off'>
      <h2>Contact</h2>
      <p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          id='Order-Email'
          required
        />
      </p>

      <h2>Delivery</h2>
      <div>

        <p id='Full-Name-Spacing'>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          required
          id='Order-First-Name'
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          required
          id='Order-Second-Name'
        />
        </p>
        
        <p>
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          id='Order-Address'
        />
        </p>
        
        <p>
        <input
          type="text"
          name="apartment"
          placeholder="Apartment, suite, etc. (optional)"
          id='Order-Apartment'
        />
        </p>
        
        <p id='City-Pin-State-Input'>
        <input
          type="text"
          name="city"
          placeholder="City"
          required
          id='Order-City'
        />

        <select name="state" id='Order-State'>
          <option value="Haryana">Haryana</option>
          {/* Add more state options here */}
        </select>

        <input
          type="text"
          name="pinCode"
          placeholder="PIN code"
          required
          id='Order-Pin'
        />
        </p>
        
        <p>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          id='Order-Phone'
        />
        </p>
      
      </div>

      <button id='Order-Payment-Btn' type="submit">Pay Now</button>
    </form>

      </div>


      {products.slice(1,2).map((val)=>(
        <div className='Order-Detail-Container-Div'>

        <div className="Product-Detail">
          
          <div className='image-productName'>
          <img src={product.image} alt="product pic" />
           <p style={{padding:10, margin:0}}>{product.name}</p>
           </div>
          <p style={{margin:0}}>₹{product.price}</p>
        </div>

        <div className="Amount-Detail">

          <div className='order-subtotal' style={{display:'flex', justifyContent:'space-between'}}>
            <p>Subtotal:</p>
            <p>$220</p>
          </div>

          <div className='Shipping' style={{display:'flex', justifyContent:'space-between'}}>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          
          <div className='order-Total' style={{display:'flex', justifyContent:'space-between'}}>
            <p style={{fontSize:25}}>Total:</p>
            <p style={{fontSize:25}}>$220</p>
          </div>

        </div>

      </div>
      ))}
    
    </div>
  )
}

export default PurchaseOrderForm
