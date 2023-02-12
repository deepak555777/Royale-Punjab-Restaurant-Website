import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import MenuList from './components/Menu/Menu-List'
// NavMenu from "./components/Navigation/Navigation-Menu";
import Story from './components/Story/story'
import HomeMenu from './components/Home/HomeMenu'
// Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
<Navbar/>
<Routes>
<Route exact path='/' element={
<React.Fragment>
<Navbar/>
  <Home/>
  <Story/>
  <HomeMenu/>
  <Features/>
  <Footer/>
  </React.Fragment>
}/>
<Route exact path='/menu' element={
  <React.Fragment>
  <MenuList/>
  <Footer/>
  </React.Fragment>
}/>
<Route exact path='/contact' element={
  <React.Fragment>
  <Footer/>
  </React.Fragment>
}/>
<Route exact path='/about' element={
  <React.Fragment>
  <Story/>
  </React.Fragment>
}/>
</Routes>

</Router>

  );
}
export default App;
