import React from "react";
import Insta1 from "../Images/Instagram.webp";
import Insta2 from "../Images/instagram2.avif";
function ContactUs() {
  return ( <>
  <div className="Social-Heading">
  <h1 className="mt-5">We are Social <i className="bi bi-instagram"></i></h1>
  </div>
  <div className="Socials-Main-Container mt-5">
        <div className="mt-4">
          <img data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200" src={Insta1} alt="Social Media" />
        </div>
        <div className="mt-4 mx-5">
          <img data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200" src={Insta2} alt="Social Media" />
        </div>
        <div className="mt-4">
          <img data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200" src={Insta1} alt="Social Media" />
        </div>
        {/* 
        <i class="bi bi-instagram"></i>
        <i class="bi bi-instagram"></i> */}
      </div>
      </>
    
  );
}

export default ContactUs;
