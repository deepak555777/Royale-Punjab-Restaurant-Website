import React from "react";


const Menu = ({ items, activeCategory }) => {
  if(activeCategory === "Lamb"){
   activeCategory="Lamb(Non-Veg)"
  }
  else if(activeCategory ==="Seafood"){
    activeCategory="Seafood(Non-Veg)"
  }
  return (
    <div className="section-center">
      <h2 className="active-category">{activeCategory}</h2>
      <ul className="grid-list">
        {items.map((menuItem) => {
          const { id, title, img, price, desc } = menuItem;
          return (
            <li key={id}>
              <div className="menu-card hover:card">
                <figure className="card-banner img-holder">
                  <img
                    src={img}
                    loading="lazy"
                    alt={title}
                    className="img-cover"
                  />
                </figure>
                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">{title}</h3>
                    <span className="span title-2">${price}</span>
                  </div>
                  <p className="card-text label-1">{desc}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
/*
 <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>


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

        <span className="badge label-1">Seasonal</span>

        <span className="span title-2">$25.50</span>
      </div>

      <p className="card-text label-1">
        Tomatoes, green bell pepper, sliced cucumber onion, olives,
        and feta cheese.
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
            Channa Samosa
          </a>
        </h3>

        <span className="span title-2">$40.00</span>
      </div>

      <p className="card-text label-1">
        Vegetables, cheeses, ground meats, tomato sauce, seasonings
        and spices
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
            Punjabi Lassi
          </a>
        </h3>

        <span className="span title-2">$10.00</span>
      </div>

      <p className="card-text label-1">
        Typesetting industry lorem Lorem Ipsum is simply dummy text of
        the priand.
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
            Chicken Tikka
          </a>
        </h3>

        <span className="badge label-1">New</span>

        <span className="span title-2">$39.00</span>
      </div>

      <p className="card-text label-1">
        Vegetables, cheeses, ground meats, tomato sauce, seasonings
        and spices.
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
            Amritsari Naan
          </a>
        </h3>

        <span className="span title-2">$25.00</span>
      </div>

      <p className="card-text label-1">
        Avocados with crab meat, red onion, crab salad stuffed red
        bell pepper and green bell pepper.
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
            Paneer Pakora(1Lb)
          </a>
        </h3>

        <span className="span title-2">$49.00</span>
      </div>

      <p className="card-text label-1">
        Vegetables, cheeses, ground meats, tomato sauce, seasonings
        and spices
      </p>
    </div>
  </div>
</li>
</ul>
*/
