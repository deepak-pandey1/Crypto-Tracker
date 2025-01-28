import React from "react";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="copyright">
          <p>Page created by Deepak Pandey</p>
          <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>


        <div className="redes-sociales">
            
          <a href="https://www.linkedin.com/in/deepak-pandey-193177324/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-link">
            <FaLinkedin />
          </a>

          <a href="https://github.com/deepak-pandey1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-link">
            <FaGithub />
          </a>

          <a href="https://www.instagram.com/the_deepak_pandey/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-link">
            <FaInstagram />
          </a>

          <a href="https://api.whatsapp.com/send?phone=919667750250" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer-link">
            <FaWhatsapp />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
