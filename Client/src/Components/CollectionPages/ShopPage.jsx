import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './shop_page.css';

export default function ShopPage() {
  // const params = useParams()
  const [count, setCount] = useState(1);
  const {id} = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const[product,setProduct] = useState(location.state?.product||null)
  const [products, setProducts] = useState([]);
  useEffect(() => {
if(!product){
  fetchProd(id)
}
    fetchData();
  },[id,product]);
const fetchProd = async(id)=>{
  try{
    let res = await fetch(`http://localhost:3388/getData/${id}`)
    let json = await res.json()
    setProduct(json)
  }catch(err){
    console.error('Error in fetching product')
    navigate('/collection')
  }

}
  const fetchData = async () => {
    try {
      let res = await fetch('http://localhost:3388/');
      let js = await res.json();
      setProducts(js);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  if (!product) {
    return <div>Loading...</div>;
  }
const relatedProducts = products.filter(p=>p._id !== product._id)
  return (
    <div id='whole'>
     
      <div id='container'>
        <div className="content-wrap">
          <div className="side-area">
          {relatedProducts.slice(1,4).map((val) => (
            <img src={val.image} key={val._id} alt={val.name} className='firstimg' />
          ))}
          </div>

          <div className="main-content">
            <img src={product.image} alt={product.name} className='main' />
            <div className="content">
              <h1 className='product-name'>{product.name || 'CANDLE NAME'}</h1>
              <p className="product-price">Rs. {product.price}</p>
              <p className="product-desc">{product.description}</p>
              <div className="counter">
                <button onClick={() => { setCount(count - 1) }}>-</button>
                <h3 className='height3'>{count}</h3>
                <button onClick={() => { setCount(count + 1) }}>+</button>
              </div>
              <div className="button-group">
                <button className="add-to-cart">ADD TO CART</button>
                <button className="buy-now">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>

        <div className="add_info">
          <h4>Additional Information</h4>
          <p>{product.additional}</p>
        </div>
        <h3 className='height'>Related Products</h3>
        <div className="related-prod">
          
{relatedProducts.slice(1,5).map((val)=>(
  <div key={val._id} className='image-wrapper col-3'>
 <div key={val._id} className="image-inner-wrapper">
 <img src={val.image} alt="" className='product-image' />
</div>

<h2 className="product-title">Collection Name</h2>
<p className="product-desc placeholder-glow">{val.detail}</p>
<p className="product-price">Price: Rs. {val.price}</p>
</div>
))}          
        </div>
      </div>
    </div>
  );
}

