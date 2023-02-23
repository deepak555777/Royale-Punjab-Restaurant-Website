import React from "react";
//import img1 from "../images/A_black_image.jpg";
//mport icon from '../images/hero-icon.png'
import "./Home.css";
import { Link } from "react-router-dom";
//import AnimatedLetters from '../AnimatedLetters/index'

function Home() {
  return (
    <>
      <section className="hero text-center overlay" aria-label="home" id="home">
        <div className="hero-slider" data-hero-slider>
          <div className="slider-item active" data-hero-slider-item>
            <p className="label-2 section-subtitle slider-reveal">
              CUISINE INDIENNE | " ਪੰਜਾਬੀ ਢਾਬਾ "
            </p>

            <div className="display-1 hero-title slider-reveal">
              <span className="simple-text">Welcome To</span>

             <h1 className="main-title">Royale Punjab</h1> 
            </div>

            <Link to="/menu" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>

              <span className="text text-2" aria-hidden="true">
                View Our Menu
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
