import React from 'react'
import img1 from '../images/A_black_image.jpg'
import icon from '../images/hero-icon.png'
import './Home.css'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <><section className="hero text-center overlay" aria-label="home" id="home">

    <ul className="hero-slider" data-hero-slider>

      <li className="slider-item active" data-hero-slider-item>

        <div className="slider-bg">
          <img src={img1}  alt="" className="img-cover"/>
        </div>

        <p className="label-2 section-subtitle slider-reveal">CUISINE INDIENNE | " ਪੰਜਾਬੀ ਢਾਬਾ "</p>

        <h1 className="display-1 hero-title slider-reveal">
        <span className="simple-text">Welcome To</span>
           <br/>
   Royale Punjab
        </h1>

        <p className="body-2 hero-text slider-reveal">
          Come with family & feel the joy of mouthwatering food
        </p>

        <Link to="/menu" className="btn btn-primary slider-reveal">
          <span className="text text-1">View Our Menu</span>

          <span className="text text-2" aria-hidden="true">View Our Menu</span>
        </Link>

      </li>

      <li className="slider-item" data-hero-slider-item>

        <div className="slider-bg">
          <img src={img1} alt="" className="img-cover"/>
        </div>

        <p className="label-2 section-subtitle slider-reveal">delightful experience</p>

        <h1 className="display-1 hero-title slider-reveal">
          Flavors Inspired by <br/>
          the Seasons
        </h1>

        <p className="body-2 hero-text slider-reveal">
          Come with family & feel the joy of mouthwatering food
        </p>

        <a href="/" className="btn btn-primary slider-reveal">
          <span className="text text-1">View Our Menu</span>

          <span className="text text-2" aria-hidden="true">View Our Menu</span>
        </a>

      </li>

      <li className="slider-item" data-hero-slider-item>

        <div className="slider-bg">
          <img src={img1} width="1880" height="950" alt="" className="img-cover"/>
        </div>

        <p className="label-2 section-subtitle slider-reveal">amazing & delicious</p>

        <h1 className="display-1 hero-title slider-reveal">
          Where every flavor <br/>
          tells a story
        </h1>

        <p className="body-2 hero-text slider-reveal">
          Come with family & feel the joy of mouthwatering food
        </p>

        <Link to="/menu" className="btn btn-primary slider-reveal">
          <span className="text text-1">View Our Menu</span>

          <span className="text text-2" aria-hidden="true">View Our Menu</span>
        </Link>

      </li>

    </ul>

    <button className="slider-btn prev" aria-label="slide to previous" data-prev-btn>
      <ion-icon name="chevron-back"></ion-icon>
    </button>

    <button className="slider-btn next" aria-label="slide to next" data-next-btn>
      <ion-icon name="chevron-forward"></ion-icon>
    </button>
  </section>

    </>
  )
}

export default Home