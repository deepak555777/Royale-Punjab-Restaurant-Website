import React from 'react'
import feature1 from '../images/images/images/features-icon-1.png'
import feature2 from '../images/images/images/features-icon-2.png'
import feature3 from '../images/images/features-icon-3.png'
import feature4 from '../images/images/features-icon-4.png'
import shape7 from '../images/images/shape-7.png'
import shape8 from '../images/images/shape-8.png'
import './Features.css'

function Features() {
  return (
    <section className="section features text-center" aria-label="features">
        <div className="container">

          <p className="section-subtitle label-2">Why Choose Us</p>

          <h2 className="headline-1 section-title">Our Strength</h2>

          <ul className="grid-list">

            <li className="feature-item">
              <div className="feature-card">

                <div className="card-icon">
                  <img src={feature1} width="100" height="80" loading="lazy" alt="icon"/>
                </div>

                <h3 className="title-2 card-title">Hygienic Food</h3>

                <p className="label-1 card-text">Our food is fully hygienic and best quality.</p>

              </div>
            </li>

            <li className="feature-item">
              <div className="feature-card">

                <div className="card-icon">
                  <img src={feature2} width="100" height="80" loading="lazy" alt="icon"/>
                </div>

                <h3 className="title-2 card-title">Fresh Environment</h3>

                <p className="label-1 card-text">Food is cooked in optimum and friendly environment.</p>

              </div>
            </li>

            <li className="feature-item">
              <div className="feature-card">

                <div className="card-icon">
                  <img src={feature3} width="100" height="80" loading="lazy" alt="icon"/>
                </div>

                <h3 className="title-2 card-title">Skilled Chefs</h3>

                <p className="label-1 card-text">We have  best chiefs in Montreal.</p>

              </div>
            </li>

            <li className="feature-item">
              <div className="feature-card">

                <div className="card-icon">
                  <img src={feature4} width="100" height="80" loading="lazy" alt="icon"/>
                </div>

                <h3 className="title-2 card-title">Event & Party</h3>

                <p className="label-1 card-text">Book for small catering and parties.</p>

              </div>
            </li>

          </ul>

          <img src={shape7} width="208" height="178" loading="lazy" alt="shape"
            className="shape shape-1"/>

          <img src={shape8} width="120" height="115" loading="lazy" alt="shape"
            className="shape shape-2"/>

        </div>
      </section>

  )
}

export default Features