import React from "react";
import img1 from '../images/dummy/menu-1.png';
import img2 from '../images/dummy/menu-2.png';
import img3 from '../images/dummy/menu-3.png';
import img4 from '../images/dummy/menu-4.png';
import img5 from '../images/dummy/menu-5.png';
import img6 from '../images/dummy/menu-6.png';
import shape1 from '../images/shape-5.png'
import shape2 from '../images/shape-6.png'
import {Link} from 'react-router-dom'

import './HomeMenu.css'

function HomeMenu() {
  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">
          Special Selection
        </p>

        <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

        <ul className="grid-list">
          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
            
              >
                <img
                  src={img1}
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Greek Salad"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="/" className="card-title">
                      Dal Makhni
                    </a>
                  </h3>
                  <span className="span title-2">$7.99</span>
                </div>

                <p className="card-text label-1">
                  Kidney Beans,Garlic,Ginger, Indian spices.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={{width: "100",height: "100",}}
              >
                <img
                  src={img2}
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Lasagne"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="/" className="card-title">
                      Paneer Masala
                    </a>
                  </h3>

                  <span className="span title-2">$10.99</span>
                </div>

                <p className="card-text label-1">
                 Curry with bell pepper,onion,homemade cheese and indian spices.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={{width: "100",height: "100",}}
              >
                <img
                  src={img3}
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Butternut Pumpkin"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="/" className="card-title">
                     Malai Kofta
                    </a>
                  </h3>

                  <span className="span title-2">$9.99</span>
                </div>

                <p className="card-text label-1">
                  Cheese ball with tomatoes,35% cream,garlic,ginger and indian spices.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={{width: "100",height: "100",}}
              >
                <img
                  src={img4}
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Tokusen Wagyu"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="/" className="card-title">
                      Chicken Tikka(plate)
                    </a>
                  </h3>
                  <span className="span title-2">$11.50</span>
                </div>

                <p className="card-text label-1">
                  Boneless chicken bresh cooked with curry,onions,ginger,garlic & indian spices.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={{width: "100",height: "100",}}
              >
                <img
                  src={img5}
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Olivas Rellenas"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="/" className="card-title">
                      Butter Chicken
                    </a>
                  </h3>

                  <span className="span title-2">$10.99</span>
                </div>

                <p className="card-text label-1">
                  Chicken cooked in a clay oven with tomato sauce, 35% cream,Indian spices and mint.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={{width: "100",height: "100",}}
              >
                <img
                  src={img6}
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Opu Fish"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="/" className="card-title">
                      Non-veg Thali
                    </a>
                  </h3>

                  <span className="span title-2">$8.99</span>
                </div>

                <p className="card-text label-1">
                  You can choose curry(Lamb,Chicken),Channa or Curry,Salad,Chatni and Naan.
                </p>
              </div>
            </div>
          </li>
        </ul>

        <p className="menu-text text-center">
          During winter daily from <span className="span">11:00 am</span> to{" "}
          <span className="span">11:00 pm</span>
        </p>

        <Link to="/menu" className="btn btn-primary">
          <span className="text text-1">View All Menu</span>

          <span className="text text-2" aria-hidden="true">
            View All Menu
          </span>
        </Link>

        <img
          src={shape1}
          width="921"
          height="1036"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
        <img
          src={shape2}
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-3 move-anim"
        />
      </div>
    </section>
  );
}

export default HomeMenu;
