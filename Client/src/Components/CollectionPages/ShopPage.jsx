import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import "./shop_page.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShopPage() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [count, setCount] = useState(1);
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
      navigate("/Collections");
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

  const addItemToCart = (product) => {
    const existingItem = cartItems.find((item) => item._id === product._id);
    if (existingItem) {
      const updateItem = cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
      setCartItems(updateItem);
      localStorage.setItem("cartItems", JSON.stringify(updateItem));
    } else {
      const updateItem = [...cartItems, { ...product, quantity: count }];
      setCartItems(updateItem);
      localStorage.setItem("cartItems", JSON.stringify(updateItem));
    }
    toast.success("Item added to cart");
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function showRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const data = await fetch(`http://localhost:2003/razorpay/${product._id}`, {
      method: "POST",
    }).then((t) => t.json());
    console.log(data);
    const options = {
      key: "rzp_test_4W26iQdHpqmXmZ",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Course Fee",
      description: "Thank you for nothing. Please give us some money",
      image: "http://localhost:2003/logo.svg",
      handler: function (response) {
        alert("Transaction successful");
      },
      prefill: {
        name: "ainwik",
        email: "ceo@ainwik.in",
        phone_number: "9899876758",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  if (!product) {
    return <div>Loading...</div>;
  }
  const relatedProducts = products.filter((p) => p._id !== product._id);
  return (
    <div id="whole">
      <ToastContainer />
      <div id="container">
        <div className="content-wrap">
          <div className="side-area" key={product._id}>
            <Link
              to={{ pathname: `/product/${product._id}`, state: { product } }}
            >
              <img
                src={product.image}
                key={product._id}
                alt={product.name}
                className="firstimg"
              />
              <img
                src={product.image}
                key={product._id}
                alt={product.name}
                className="firstimg"
              />
              <img
                src={product.image}
                key={product._id}
                alt={product.name}
                className="firstimg"
              />
            </Link>
          </div>

          <div className="main-content">
            <img src={product.image} alt={product.name} className="main" />
            <div className="product-content">
              <h1 className="product-name">{product.name || "CANDLE NAME"}</h1>
              <p id="product-price">Rs. {product.price}</p>
              <p className="product-desc">{product.description}</p>
              {count === 5 ? <p>Reached Maximum Limit !</p> : <p></p>}
              <div className="counter">
                <button
                  onClick={() => {
                    count === 0 ? setCount(0) : setCount(count - 1);
                  }}
                >
                  -
                </button>
                <h3 className="height3">{count}</h3>
                <button
                  onClick={() => {
                    count === 5 ? setCount(5) : setCount(count + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="button-group">
                <button
                  id="add-to-cart"
                  onClick={() => addItemToCart({ ...product, quantity: count })}
                >
                  ADD TO CART
                </button>
                <Link
                  style={{ textDecoration: "None" }}
                  to={{
                    pathname: `/PurchaseOrderForm/${product._id}`,
                    state: { product: { ...product, quantity: count } },
                  }}
                >
                  <button id="buy-now">BUY NOW</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="add_info">
          <h4>Additional Information</h4>
          <p>{product.additional}</p>
        </div>
        <h3 className="height">Related Products</h3>
        <div className="related-prod">
          {relatedProducts.slice(1, 5).map((val) => (
            <div key={val._id} className="image-wrapper col-3">
              <Link
                to={{
                  pathname: `/product/${val._id}`,
                  state: { product: val },
                }}
              >
                <div key={val._id} className="image-inner-wrapper">
                  <img src={val.image} alt="" className="product-image" />
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
