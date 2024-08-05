import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams, Link} from 'react-router-dom';
import './shop_page.css';
// import product from '../../../../Server/config/User';

export default function ShopPage() {
  // const params = useParams()
  const [count, setCount] = useState(1);
  const {id} = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const[product,setProduct] = useState(location.state?.product||null)
  const [products, setProducts] = useState([]);
  useEffect(() => {
if(!product || product._id !== id){
  fetchProd(id)
}
  },[id,product]);
  useEffect(()=>{
    fetchData();
  })
const fetchProd = async(id)=>{
  // let res = await fetch(`http://localhost:3388/getData/${id}`)
  //   let json = await res.json()
  //   setProduct(json)
  try{
    let res = await fetch(`http://localhost:3388/getData/${id}`)
    let json = await res.json()
    setProduct(json)
  }catch(err){
    console.error('Error in fetching product')
    navigate('/Collections')
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
          <div className="side-area" key={product._id}>
          {/* {relatedProducts.slice(1,4).map((val) => (
             <Link to={{pathname:`/product/${val._id}`, state:{product:val}}}>
            <img src={val.image} key={val._id} alt={val.name} className='firstimg' />
            </Link>
          ))} */}
          <Link to={{pathname:`/product/${product._id}`, state:{product}}}>
           <img src={product.image} key={product._id} alt={product.name} className='firstimg' />
           <img src={product.image} key={product._id} alt={product.name} className='firstimg' />
           <img src={product.image} key={product._id} alt={product.name} className='firstimg' />
           </Link>
          </div>

          <div className="main-content">
            <img src={product.image} alt={product.name} className='main' />
            <div className="content">
              <h1 className='product-name'>{product.name || 'CANDLE NAME'}</h1>
              <p className="product-price">Rs. {product.price}</p>
              <p className="product-desc">{product.description}</p>
                {
                  count===5?<p>Reached Maximum Limit !</p>:console.log("TT")
                }
              <div className="counter">
                <button onClick={() => { count===0?setCount(0): setCount(count-1) }}>-</button>
                <h3 className='height3'>{count}</h3>
                <button onClick={() => { count===5?setCount(5):setCount(count + 1) }}>+</button>
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
    <Link to={{pathname:`/product/${val._id}`, state:{product:val}}}>
 <div key={val._id} className="image-inner-wrapper">
 <img src={val.image} alt="" className='product-image' />
</div>
<h2 className="product-title">Collection Name</h2>
<p className="product-desc placeholder-glow">{val.detail}</p>
<p className="product-price">Price: Rs. {val.price}</p>
</Link>
</div>
))}          
        </div>
      </div>
    </div>
  );
}

