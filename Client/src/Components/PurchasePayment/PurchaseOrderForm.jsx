import React, { useState, useEffect } from 'react';
import './PurchaseOrder.css';
import { useLocation, useParams } from 'react-router-dom';

function PurchaseOrderForm() {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: 'Haryana', // Default state
    pinCode: '',
    phone: ''
  });

  useEffect(() => {
    if (!product || product._id !== id) {
      fetchProd(id);
    }
  }, [id, product]);

  const fetchProd = async (id) => {
    try {
      const res = await fetch(`http://localhost:2003/getData/${id}`);
      const json = await res.json();
      setProduct({ ...json, quantity });
    } catch (err) {
      console.error("Error in fetching product", err);
    }
  };

  const quantity = product?.quantity || 1;
  const subtotal = product ? product.price * quantity : 0;
  const shipping = 0; // Assuming free shipping for now
  const total = subtotal + shipping;

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function showRazorpay(e) {
    e.preventDefault();

    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // Log to confirm Razorpay script loaded
    console.log("Razorpay SDK loaded successfully.");

    try {
        // Fetch order data from your server
        const response = await fetch(`http://localhost:2003/razorpay/${product._id}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to create Razorpay order');
        }

        const data = await response.json();

        console.log("Razorpay order created:", data);

        const options = {
            key: "rzp_test_4W26iQdHpqmXmZ",  // Replace with your Razorpay API key
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: "Your Order",
            description: "Payment for your order",
            handler: async function (response) {
                console.log("Razorpay Payment Success:", response);
                try {
                    // Update order with payment details
                    const updateResponse = await fetch('http://localhost:2003/update-order', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpayOrderId: response.razorpay_order_id,
                            razorpaySignature: response.razorpay_signature
                        })
                    });

                    if (!updateResponse.ok) {
                        throw new Error('Failed to update order with payment details');
                    }

                    alert("Payment successful!");
                } catch (err) {
                    console.error("Error updating order:", err);
                    alert("Payment succeeded, but there was an issue updating your order. Please contact support.");
                }
            },
            prefill: {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                phone_number: formData.phone,
            },
            notes: {
                address: `${formData.address}, ${formData.apartment}, ${formData.city}, ${formData.state}, ${formData.pinCode}`,
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    } catch (err) {
        console.error("Error in Razorpay payment:", err);
        alert("There was an issue initiating your payment. Please try again.");
    }
}


  return (
    <div className='Order-Main-Container'>
      <div className='Form-Container-div'>
        <form className='Payment-Form' autoComplete='off' onSubmit={showRazorpay}>
          <h2>Contact</h2>
          <p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id='Order-Email'
              value={formData.email}
              onChange={handleChange}
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
                value={formData.firstName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
                id='Order-Second-Name'
                value={formData.lastName}
                onChange={handleChange}
              />
            </p>

            <p>
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                id='Order-Address'
                value={formData.address}
                onChange={handleChange}
              />
            </p>

            <p>
              <input
                type="text"
                name="apartment"
                placeholder="Apartment, suite, etc. (optional)"
                id='Order-Apartment'
                value={formData.apartment}
                onChange={handleChange}
              />
            </p>

            <p id='City-Pin-State-Input'>
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                id='Order-City'
                value={formData.city}
                onChange={handleChange}
              />

              <select
                name="state"
                id='Order-State'
                value={formData.state}
                onChange={handleChange}
              >
                <option value="Haryana">Haryana</option>
                {/* Add more state options here */}
              </select>

              <input
                type="text"
                name="pinCode"
                placeholder="PIN code"
                required
                id='Order-Pin'
                value={formData.pinCode}
                onChange={handleChange}
              />
            </p>

            <p>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                id='Order-Phone'
                value={formData.phone}
                onChange={handleChange}
              />
            </p>
          </div>

          <button id='Order-Payment-Btn' type="submit">Pay Now</button>
        </form>
      </div>

      {product && (
        <div className='Order-Detail-Container-Div'>
          <div className="Product-Detail">
            <div className='image-productName'>
              <img src={product.image} alt="product pic" />
              <p style={{ padding: 10, margin: 0 }}>{product.name}</p>
            </div>
            <p style={{ margin: 0 }}>₹{product.price * quantity}</p> {/* Calculated price based on quantity */}
          </div>

          <div className="Amount-Detail">
            <div className='order-subtotal' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>Subtotal:</p>
              <p>₹{subtotal}</p>
            </div>

            <div className='Shipping' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>Shipping:</p>
              <p>Free</p>
            </div>

            <div className='order-Total' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ fontSize: 25 }}>Total:</p>
              <p style={{ fontSize: 25 }}>₹{total}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PurchaseOrderForm;
