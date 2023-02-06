import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container1 grid1">
        <div className="box">
          <h3>STORE</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="box">
          <h2>Recent Post</h2>
          <div className="text">
            <p>Leclerc frustrated over Ferrari 'changing' team orders decision</p>
            <span>13 Nov 2022</span>
          </div>
        </div>
        <div className="box">
          <h2>Get In Touch</h2>
          <p>Mail: <span>elenechikviladzewrk@gmail.com</span></p>
        </div>
      </div>
      <div className="container legal">
        <label>
          Design and developed by <span>Elene Chikviladze</span>
        </label>
      </div>
    </footer>
  );
};

export default Footer;