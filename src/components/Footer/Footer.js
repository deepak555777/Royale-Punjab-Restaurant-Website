import React from "react";
import "./Footer.css";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer section has-bg-image text-center">
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <h2>
              Restaurant <br />
              <span className="hero-title footer-text-main">Royale Punjab</span>
            </h2>

            <address className="body-4">
              752 Jarry St W, Montreal, Quebec , (Canada) H3N 1G6
            </address>

            <a
              href="mailto:sdeepakdev2@gmail.com"
              className="body-4 contact-link"
            >Book Now</a>

            <a href="tel:+1 (514) 278 8777" className="body-4 contact-link">
              Booking Request : (+1)514-278-8777
            </a>

            <p className="body-4">
              Open : 11:00 am - 11:00 pm
              <br />
              Tuesday Closed
            </p>

            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>

            <form action="" className="input-wrapper">
              <div className="icon-wrapper">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email"
                  autocomplete="off"
                  className="input-field"
                />
              </div>

              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Send an E-mail</span>

                <span className="text text-2" aria-hidden="true">
                  Send an E-mail
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2023 Royale Punjab All Rights Reserved | Developed by{" "}
            <Link to="https://www.linkedin.com/in/sharmadeepak03/"
          
              className="link"
            >
              Deepak Sharma
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
