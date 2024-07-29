import React from 'react'
import "./ContactUs.css"
function ContactUs() {
  return (

  <div className='box ' id="damn" >
 
     <div className='container-fluid d-flex justify-content-center'>
     <i className="bi bi-envelope-at gradient-background" style={{fontSize:40, marginTop:30}}></i>
      </div >

        <h2>Contact Us</h2>

       <div className="contact-form">
             <textarea id="conty" placeholder="type here"></textarea>
               <div className="form-group">
                  <h3>How may we assist you?</h3>
                   <input type="email" placeholder="enter your email"/>
                    <button id="butt">submit</button>
                   </div>
                </div>

                 <div className="contact-info" >

               <p>Email: <a href="mailto:customerservice@srimiri.in">customerservice@srimiri.in</a></p>
               <p>Phone: <a href="tel:+918787878787">+91 8787878787</a></p>
               <p>Monday to Friday - 9.00 am to 6.00 pm(Excluding holidays)</p>
               <p>We will respond in 1-2 working days.Thank you for your patience.</p>
                 </div>

  </div>

  )
}

export default ContactUs