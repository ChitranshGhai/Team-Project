import React from "react";
import "./BulkOrder.css";
import Swal from 'sweetalert2'
function BulkOrder() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e9d76375-cd2c-42b2-9887-16cf6b285e4a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Message Sent!",
        text: "Thank You For Contacting Us!",
        icon: "success"
      });
    }
  };

  return (
    <div>
      <div className="FullPage">
        <div className="MainForm">
        <form onSubmit={onSubmit} method="POST">
          <h2>Bulk order Inquiry</h2>
          <div className="ContactInfo">
               
            <span>Contact info</span>
            <br />
            <label htmlFor="name">Name*</label>
            <br />
            <input type="text" id="name" name="name" required />
            <br />
            <label htmlFor="org">Company/Team/Organization*</label>
            <br />
            <input type="text" id="orgy" name="name" required />
            <br />
            <label htmlFor="Email">Email*</label>
            <br />
            <input type="email" id="email1" name="email" required />
            <br />
            <label htmlFor="phoneNumber">Phone Number*</label>
            <br />
            <input type="number" id="phone" name="message" required />
            <br />
            <label htmlFor="city">City*</label>
            <br />
            <input type="text" id="city" name="message" required />
            <br />
          </div>
          <div className="Specifics">
            <h5>Order Quantity*</h5>
            <ul>
              <li>
                {" "}
                <input
                  type="radio"
                  name="message"
                  value="100-200"
                  required
                />{" "}
                50-100
              </li>
              <li>
                {" "}
                <input
                  type="radio"
                  name="message"
                  value="200-500"
                  required
                />{" "}
                100-200
              </li>
              <li>
                <input
                  type="radio"
                  name="message"
                  value="500-above"
                  required
                />{" "}
                200 above
              </li>
            </ul>

            <h5>Design*</h5>
            <ul>
              <li>
                {" "}
                <input
                  type="radio"
                  name="design"
                  value="Sirimiri"
                  required
                />{" "}
                Sirimiri
              </li>
              <li>
                {" "}
                <input
                  type="radio"
                  name="design"
                  value="customized"
                  required
                />{" "}
                Customized{" "}
              </li>
            </ul>
          </div>
          <hr />
          <div className="Designchosen">
            <p>
              To help us get a better understanding of your request, please
              upload any Logos and Graphics/Design Ideas or if you’ve had your
              own graphics designer / team create a mockup for us, that’s great!
            </p>
            <input type="file" id="btn" name="message" placeholder="Choose a file"/>
            <br />
          </div>
          <div className="Requests">
            <label htmlFor="reqs">Additional Requests</label>
            <br />
            <input type="text" id="reqs" name="message" />
          </div>

          <button type="submit" id="btn"> Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BulkOrder;
