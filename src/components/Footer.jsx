import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          <img src={logo} alt="" />
        </p>

        <p>@all right reserved</p>
      </div>

      <div>
        <h5 style={{marginRight:"2rem"}}>Follow Us</h5>
        <div>
          <a href="https://youtube.com/6packprogrammer" target={"blank"}>
            Youtube
          </a>
          <a href="https://instagram.com/meabhisingh" target={"blank"}>
            Instagram
          </a>
          <a href="https://github.com/meabhisingh" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
