import React from 'react'
import './story.css'
import img1 from '../images/about-banner.jpg'
import img2 from '../images/about-abs-image.jpg'
import img3 from '../images/badge-2.png'
import img4 from '../images/shape-3.png'

function Story() {
  return ( 
  <section className="section about text-center" aria-labelledby="about-label" id="about">
  <div className="container">

    <div className="about-content" style={{marginTop:"5rem"}}>

      <p className="label-2 section-subtitle" id="about-label">Our Story</p>

      <h2 className="headline-1 section-title">We Have Something To Share With You.</h2>

      <p className="section-text">
        Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
        industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled
        it to make a type specimen book It has survived not only five centuries, but also the leap into.
      </p>

      <div className="contact-label">Book Through Call</div>

      <a href="tel:+1(514)2788777" className="body-1 contact-number hover-underline">+1 (514) 278 8777</a>

      <a href="#" className="btn btn-primary">
        <span className="text text-1">Read More</span>

        <span className="text text-2" aria-hidden="true">Read More</span>
      </a>

    </div>

    <figure className="about-banner">

      <img src={img1} width="570" height="570" loading="lazy" alt="about banner"
        className="w-100" data-parallax-item data-parallax-speed="1"/>

      <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
        <img src={img2} width="285" height="285" loading="lazy" alt=""
          className="w-100"/>
      </div>

      <div className="abs-img abs-img-2 has-before">
        <img src={img3} width="133" height="134" loading="lazy" alt=""/>
      </div>

    </figure>

    <img src={img4} width="197" height="194" loading="lazy" alt="" className="shape"/>

  </div>
</section>
  )
}

export default Story