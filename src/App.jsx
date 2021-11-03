import React from "react";
import {useState} from "react";
import Toolbar from "./Components/Toolbar/Toolbar";
import Intro from "./Components/Intro/Intro"
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import  Menu  from "./Components/Menu/Menu";
import "./App.scss";

const App = () => {

  const [openMenu,setOpenMenu] = useState(false)
  
  return (
    <>
      <div className="app">
        <Toolbar menuOpen={openMenu} setMenuOpen={setOpenMenu} />
        <Menu menuOpen={openMenu} setMenuOpen={setOpenMenu} />
      </div>

      <div className="sections">
        <Intro />
        <Portfolio />
        <Testimonial />
        <Contact />
      </div>
    </>
  );
}

export default App;
