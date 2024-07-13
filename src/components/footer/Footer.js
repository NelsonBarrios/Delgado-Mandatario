import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Emmanuel Delgado</h1>
        <p>Mandatario del Automotor</p>
      </div>
      <div className="footer-contact">
        <h3>Contáctame</h3>
        <p>Y pongámonos manos a la obra</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Registrado en DNRPA</div>
        <div className="sns-links">
          <a href="https://api.whatsapp.com/send?phone=+5491144787277" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp linkedin"></i>
          </a>
          <a href="https://facebook.com/emma.delgado.121/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
          <a href="https://www.instagram.com/emmadelgado0k/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
