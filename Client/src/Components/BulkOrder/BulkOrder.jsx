import React from "react";
import "./BulkOrder.css"; // Make sure to style your form properly
import Swal from 'sweetalert2'; // Import SweetAlert2

function BulkOrder() {
  // Form submission handler
  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Collect form data
    const formData = new FormData(event.target);
    
    // Transform FormData into a JSON object
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      // Sending form data to backend API
      const res = await fetch("http://localhost:9998/api/bulkorders", { // Replace with your backend API URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      // Display SweetAlert based on the result
      if (result.success) {
        Swal.fire({
          title: "Message Sent!",
          text: "Your bulk order inquiry has been submitted successfully.",
          icon: "success",
          confirmButtonText: "OK"
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "There was an issue submitting your inquiry.",
          icon: "error",
          confirmButtonText: "Try Again"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Server error. Please try again later.",
        icon: "error",
        confirmButtonText: "OK"
      });
    }
  };

  return (
    <div>
      <div className="FullPage">
        <div className="MainForm">
          <form onSubmit={onSubmit} method="POST">
            <h2>Bulk order Inquiry</h2>
            
            {/* Contact Information */}
            <div className="ContactInfo">
              <span>Contact Info</span>
              <br />
              <label htmlFor="name">Name*</label>
              <br />
              <input type="text" id="name" name="name" required />
              <br />
              <label htmlFor="organization">Company/Team/Organization*</label>
              <br />
              <input type="text" id="organization" name="organization" required />
              <br />
              <label htmlFor="email">Email*</label>
              <br />
              <input type="email" id="email1" name="email1" required />
              <br />
              <label htmlFor="phone">Phone Number*</label>
              <br />
              <input type="tel" id="phone" name="phone" required />
              <br />
              <label htmlFor="city">City*</label>
              <br />
              <input type="text" id="city" name="city" required />
              <br />
            </div>

            {/* Order Specifics */}
            <div className="Specifics">
              <h5>Order Quantity*</h5>
              <ul>
                <li>
                  <input type="radio" name="quantity" value="50-100" required /> 50-100
                </li>
                <li>
                  <input type="radio" name="quantity" value="100-200" required /> 100-200
                </li>
                <li>
                  <input type="radio" name="quantity" value="200-above" required /> 200 above
                </li>
              </ul>

              <h5>Design*</h5>
              <ul>
                <li>
                  <input type="radio" name="design" value="Sirimiri" required /> Sirimiri
                </li>
                <li>
                  <input type="radio" name="design" value="Customized" required /> Customized
                </li>
              </ul>
            </div>

            <hr />

            {/* Additional Requests */}
            <div className="Requests">
              <label htmlFor="additionalRequests">Additional Requests</label>
              <br />
              <input type="text" id="additionalRequests" name="additionalRequests" />
            </div>

            <button type="submit" id="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BulkOrder;
