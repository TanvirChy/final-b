import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerWraper">
      <div className="footerLeft">
        <h2 className="footerLabel">About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          vero voluptas aliquam molestias sed. Alias, excepturi ea culpa
          voluptatum explicabo cumque at perferendis ab.
        </p>
      </div>
      <div className="footerCenter">
        <h2 className="footerLabel">Terms and Condition</h2>
        <ul className="footerUl">
          <li className="footerItem">Eligibaleness</li>
          <li className="footerItem">How can pick product</li>
          <li className="footerItem">Payment Method</li>
          <li className="footerItem">Contact Us</li>
        </ul>
      </div>
      <div className="footerRight">
        <h2 className="footerLabel">Our Office Location</h2>
        <div className="footerMap">
          <iframe
            title="officelocation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7298.95961235649!2d90.36578352316272!3d23.837090201860438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14980732303%3A0x9bf9080a7aa5e06a!2sMirpur%20DOHS%20Park%2C%20Avenue%205%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1630304316182!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
        <p className="footerLocation">Mirpur 1,Dhaka</p>
      </div>
    </div>
  );
};

export default Footer;
