import React, { useState,useEffect,useCallback} from "react";
import "./Menu-List.css";
import Menu from "./Menu";
import Categories from "./Categories";

function MenuList() {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Appetizers");


  const getData = useCallback(async () => {
    try {
      const response = await fetch('https://royale-punjab-default-rtdb.firebaseio.com/menu.json');
      const data = await response.json();
      const items = [];
      Object.keys(data).forEach((category) => {
        // eslint-disable-next-line
        Object.keys(data[category]).map((dish) => {
          
          items.push({
            id: data[category][dish].id,
            title: data[category][dish].title,
            category: data[category][dish].category,
            price: data[category][dish].price,
            img: data[category][dish].img,
            desc: data[category][dish].desc,
          });
        });
      })
      setMenuItems(items);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
  getData();
  },[getData])
    
  const allCategories = [ ...new Set(menuItems.map(item => item.category))];
  // setCategories(allCategories)

  const filterItems = (category) => {
    if(category === "all" ) {
      setFilteredItems(menuItems);
    } else{
      const newItems = menuItems.filter((item) => item.category === category);
      setFilteredItems(newItems);
    }
setActiveCategory(category);
  };
  const [filteredItems, setFilteredItems] = useState();

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>OUR MENU</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} activeCategory={activeCategory} filterItems={filterItems} />
        <Menu items={filteredItems? filteredItems:menuItems} activeCategory={activeCategory}/>
      </section>
    </main>
  );
}

export default MenuList;
