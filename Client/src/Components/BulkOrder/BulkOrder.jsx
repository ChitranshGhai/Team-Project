import React from 'react'
import "./BulkOrder.css"
function  BulkOrder() {
  return (
<div>
    <div className='FullPage'>
       <div className='MainForm'>
        <h2>Bulk order Inquiry</h2>
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
      <div className='Specifics'>
                <h5>Order Quantity*</h5>
             <ul>
              <li>   <input type="radio" name="quantity" value="100-200" required /> 50-100</li>
              <li>  <input type="radio" name="quantity" value="200-500" required /> 100-200</li>
                <li><input type="radio" name="quantity" value="500-above" required /> 200 above</li>
             </ul>
            
                <h5>Design*</h5>
                <ul>
              <li>   <input type="radio" name="design" value="Sirimiri" required /> Sirimiri</li>
              <li>  <input type="radio" name="design" value="customized" required /> Customized </li>
             </ul>

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

      <button id='btn2'> submit</button>
    </div>  
   </div>
   </div>
  )
}

export default  BulkOrder;
