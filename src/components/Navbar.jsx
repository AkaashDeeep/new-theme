import React from 'react';
import {NavLink} from "react-router-dom";
import Switch from '@mui/material/Switch';


const Nav = (props) =>{ 
  const open = () =>{
    document.getElementById('menu').classList.add('animate');
    document.getElementById('overlay').classList.add('animate');
  }
  const close = () =>{
    document.getElementById('menu').classList.remove('animate');
    document.getElementById('overlay').classList.remove('animate');
  }
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return(
    <>
      <header className="header_Main" style={props.themes}>
       
        <div className="brand">
          <NavLink to="/" style={props.themes}><h1>{props.brand}</h1></NavLink>
        </div>
        <div className="collapse"><i className="fas fa-bars" onClick={open}></i></div>
        <div className="mask" id="overlay" onClick={close}></div>
        <div className="list"  id="menu">
          <ul className="menu" >
            <NavLink to="/" style={props.themes} className="underline"><li>{props.list1}</li></NavLink>
            <NavLink to="/Service" style={props.themes}><li>{props.list2}</li></NavLink>
            <NavLink to="/Portfolio" style={props.themes}><li>{props.list3}</li></NavLink>
            <NavLink to="/About" style={props.themes}><li>{props.list4}</li></NavLink>
            <NavLink to="/Contact" style={props.themes}><li>{props.list5}</li></NavLink>
            <NavLink to="/Login" style={props.themes}><li>{props.list6}</li></NavLink>
            
            <li><Switch {...label} onClick={props.switchToggle}  color="secondary"/></li>
            
          </ul>
        </div>
      </header>
    </>
  );
}

export default Nav;