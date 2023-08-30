
import './App.css';
import "./Navbar.css"
import { useState } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import resume from "./resume.pdf"
import Hero from './components/Hero';
import About from './components/About';
import Exp from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { scroller } from 'react-scroll';



function App() {
  const [menuActive, setMenuActive] = useState(false);
  const openMenu = () => {
    setMenuActive(!menuActive);
  };
  const scrollTo = (target) => {
    scroller.scrollTo(target, {
        duration: 50,
        smooth: true,
        offset: 0 
    });
};
  return (
    <div className="app">
      <nav>
          {menuActive && 
              <div className="nav--menu2">
                  <li><a onClick={() => scrollTo("about")}>about</a></li>
                  <li><a onClick={() => scrollTo("experience")}>work</a></li>
                  <li><a onClick={() => scrollTo("projects")}>projects</a></li>
                  <li><a onClick={() => scrollTo("contact")}>contact</a></li>
                  <li><a href={resume} target= "_blank" style = {{color: "var(--cl-accent)"}}>resume <ArrowForwardIcon/></a></li>
              </div>
          }
          <div className={`toggle${menuActive ? " toggle-active" : ""}`} onClick={openMenu}>
              <IconButton style={{ fontSize: "2em" }}>
                  {menuActive ? <CloseIcon /> : <MenuIcon style={{ color: "var(--cl-gray-3)" }} />}
              </IconButton>
          </div>
          <ul className='nav--ul'>
              {/* <li><a href="#about" >about</a></li> */}
              <li><a onClick={() => scrollTo("about")}>about</a></li>
              <li><a onClick={() => scrollTo("experience")}>work</a></li>
              <li><a onClick={() => scrollTo("projects")}>projects</a></li>
              <li><a onClick={() => scrollTo("contact")}>contact</a></li>
              <li><a href={resume} target= "_blank" style = {{color: "var(--cl-accent)"}}>resume <ArrowForwardIcon/></a></li>
          </ul>
      </nav>

      <div className="content">
        <section id='hero'><Hero /></section>
        <section id='about'><About /></section>
        <section id='experience'><Exp /></section>
        <section id='projects'><Project /></section>
        <section id='contact'><Contact/></section>
        
        
      </div>
      <Footer/>

    </div>
  );
}

export default App;
