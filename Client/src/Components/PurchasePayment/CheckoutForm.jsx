import React, { useState } from 'react';
import './PurchaseOrder.css';
import { useLocation } from 'react-router-dom';

function CheckoutForm() {
  const location = useLocation();
  const { cartItems, totalAmount } = location.state || {}; // Get cartItems and totalAmount from the cart
  const [loadingPayment, setLoadingPayment] = useState(false); // Loading state for payment
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  async function showRazorpay(e) {
    e.preventDefault();
    // Simple form validation
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.address || !formData.city || !formData.pinCode || !formData.phone) {
      alert("Please fill out all required fields.");
      return;
    }

    setLoadingPayment(true); // Show loading state

    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setLoadingPayment(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:2003/razorpay/create-order`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems, formData })
      });

      const data = await response.json();

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY || "rzp_test_4W26iQdHpqmXmZ",  // Use environment variable for Razorpay key
        currency: data.currency,
        amount: data.amount.toString(),
        order_id: data.id,
        name: "Your Order",
        description: "Payment for your order",
        handler: async function (response) {
          const updateResponse = await fetch('http://localhost:2003/update-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature
            })
          });

          alert("Payment successful!");
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
      alert("There was an issue initiating your payment. Please try again.");
    }

    setLoadingPayment(false); // Reset loading state after payment is handled
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
                <option value="Delhi">Delhi</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Punjab">Punjab</option>
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

          <button id='Order-Payment-Btn' type="submit" disabled={loadingPayment}>
            {loadingPayment ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>

      <div className='Order-Detail-Container-Div'>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((product) => (
            <div className="Product-Detail" key={product._id}>
              <div className='image-productName'>
                <img src={product.image} alt="product pic" />
                <p>{product.name}</p>
              </div>
              <p>₹{product.price * product.quantity}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>  // Fallback if cart is empty
        )}

        <div className="Amount-Detail">
          <div className='order-subtotal'>
            <p>Subtotal:</p>
            <p>₹{totalAmount}</p>
          </div>

          <div className='Shipping'>
            <p>Shipping: Free</p>
            {/* <p>Free</p> */}
          </div>

          <div className='order-Total'>
            <p>Total:</p>
            <p>₹{totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
