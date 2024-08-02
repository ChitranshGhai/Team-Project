import React from 'react'
import "./BulkOrder.css"
function  BulkOrder() {
  return (
    <div className='FullPage'>
      <div className='HeaderClass'>
        <h2>Bulk Order Inquiry </h2>
        <p>Please use this form to get in touch with our team for a
           quote on bulk or custom orders
        </p>
      </div>  
       <div className='MainForm'>
        <h3>Bulk order Inquiry</h3>
        <div className='ContactInfo'>
        <span>Contact info</span>
        <br/>
        <label htmlFor="name">Name*</label><br/>
                <input type="text" id="name" name="name" required />
        <br/>
        <label htmlFor="org">Company/Team/Organization*</label><br/>
                <input type="text" id="orgy" name="organization" required />
        <br/>   
        <label htmlFor="Email">Email*</label><br/>
                <input type="text" id="email" name="email" required />
        <br/>   
        <label htmlFor="phoneNumber">Name*</label><br/>
                <input type="text" id="phone" name="phone_number" required />
        <br/>   
        <label htmlFor="city">City*</label><br/>
                <input type="text" id="city" name="city" required />
        <br/>        
      </div>
      <hr/>
      <div className='Specifics'>
              <div className="Quantity">Order Quantity*</div>
                <label><input type="radio" name="quantity" value="100-200" required /> 50-100</label>
                <label><input type="radio" name="quantity" value="200-500" required /> 100-200</label>
                <label><input type="radio" name="quantity" value="500-above" required /> 200 above</label>

              <div className="Design">Design*</div>
                <label><input type="radio" name="design" value="Sirimiri" required /> Srimiri hampers</label>
                <label><input type="radio" name="design" value="customized" required /> Customized hampers</label>
      </div>
      <hr/>
      <div className='Designchosen'>
      <label htmlFor="DesignSection">Design</label><br/>
        <button id='btn'> choose a file</button><br/>
        <p>
        To help us get a better understanding of your request, please upload any
        Logos and Graphics/Design Ideas or if you’ve had your own graphics
        designer / team create a mockup for us, that’s great!
        </p>
      </div>
      <div className='Requests'>
      <label htmlFor="reqs">Additional Requests</label><br/>
      <input type="text" id="reqs" name="request" />
      </div>
      <hr/>
      <button id='btn2'> submit</button>
    </div>  
   </div>
  )
}

export default  BulkOrder;
