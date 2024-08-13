import React from 'react'
import Swal from 'sweetalert2'
import "./ContactUs.css"
function ContactUs() {

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
 <div className='MainOh'>
  <div className='box ' id="damn" >
 
     <div className='container-fluid d-flex justify-content-center'>
     <i className="bi bi-envelope-at gradient-background" style={{fontSize:40, marginTop:30}}></i>
      </div >

        <h2>Contact Us</h2>
      <form onSubmit={onSubmit} method="POST">
       <div className="contact-form">
             <textarea id="conty" placeholder="type here" name='message' className="textarea-placeholder"></textarea>
               <div className="form-group">
                  <h3>How may we assist you?</h3>
                   <input type="email" name='email' placeholder="enter your email" className="input-placeholder"/>
                    <button id="butt">submit</button>
                   </div>
                </div>
      </form>
                 <div className="contact-info" >

               <p>Email: <a href="mailto:customerservice@srimiri.in">customerservice@srimiri.in</a></p>
               <p>Phone: <a href="tel:+918787878787">+91 8787878787</a></p>
               <p>Monday to Friday - 9.00 am to 6.00 pm(Excluding holidays)</p>
               <p>We will respond in 1-2 working days.Thank you for your patience.</p>
                 </div>

  </div>
 </div>

  )
}

export default ContactUs