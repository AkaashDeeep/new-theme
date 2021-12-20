import React,{useState} from 'react';
import Nav from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Notfound from './components/Notfound';
import {BrowserRouter,Routes,Route} from "react-router-dom";


const App = () =>{


  const mask1={
    background:"linear-gradient(120deg, rgb(4, 1, 31) 50%, rgb(174, 0, 255) 50%)",
  }

  const mask2={
    background:"linear-gradient(120deg, rgb(0, 20, 255) 50%, rgb(255 94 0) 50%)",
  }

  const ThemeChanger2= {
    color:"#ffd400",
    transition:"0.5s ease all"
  };
  const ThemeChanger= {
    backgroundColor:"rgb(255 94 0)",
    color:"black",
    transition:"0.5s ease all",
  };
  const [themes, setThemes] = useState(ThemeChanger2);
  const [backColor, setBackColor] = useState(mask1);

  const switchToggle =()=>{
    if(themes.color === "black"){
      setThemes(ThemeChanger2);
      setBackColor(mask1);
    }
    else{
      setThemes(ThemeChanger);
      setBackColor(mask2);
    }
  };


  return(
    <>
      <BrowserRouter>
        <Nav 
        brand = "Brand Name"
        list1 = "Home" 
        list2 = "Service" 
        list3 = "Portfolio" 
        list4 = "About us" 
        list5 = "Contact us"
        list6 = "login" 
        switchToggle={switchToggle}
        themes={themes}/>
        <Routes>
          <Route  exact path="/" element={<Home themes={themes} backColor={backColor} />} />
          <Route  path="Service" element={<Service themes={themes} backColor={backColor}/>} />
          <Route  path="Portfolio" element={<Portfolio themes={themes} backColor={backColor}/>} />
          <Route  path="About" element={<About themes={themes} backColor={backColor}/>} />
          <Route  path="Contact" element={<Contact themes={themes} backColor={backColor}/>} />
          <Route  path="Login" element={<Login themes={themes} backColor={backColor}/>} />
          <Route  path="*" element={<Notfound backColor={backColor}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
