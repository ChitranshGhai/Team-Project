import React from "react";
import logo from "../Images/logo.svg";
import "./App.css";
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
function LoadScript() {
  async function showRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const data = await fetch("http://localhost:2003/razorpay", {
      method: "POST",
    }).then((t) => t.json());
    console.log(data);
    const options = {
      key: "rzp_test_4W26iQdHpqmXmZ",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Course Fee",
      description: "Thank you for nothing. Please give us somemoney",
      image: "http://localhost:2003/logo.svg",
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Razorpay payment portal</p>
        <button className=" btn btn-success App-link" onClick={showRazorpay}>
          Pay now
        </button>
      </header>
    </div>
  );
}
export default LoadScript;
