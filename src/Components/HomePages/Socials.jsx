import React from "react";
import Insta1 from "../Images/Instagram.webp";
import Insta2 from "../Images/instagram2.avif";
function ContactUs() {
  return (
    <div className="Socials-Main-Container m-5">
      <div className="row m-4 d-flex justify-content-center">
        <div className=" Insta-Pics col-sm-12 col-md-4  mt-4">
          <img src={Insta1} alt="Social Media" />
        </div>
        <div className="Insta-Pics col-sm-12 col-md-4  m-0 mt-4">
          <img src={Insta2} alt="Social Media" />
        </div>
        <div className="Insta-Pics col-sm-12 col-md-4  m-0 mt-4">
          <img src={Insta1} alt="Social Media" />
        </div>
      </div>
      {/* <i class="bi bi-instagram"></i>
      <i class="bi bi-instagram"></i>
      <i class="bi bi-instagram"></i> */}
    </div>
  );
}

export default ContactUs;
