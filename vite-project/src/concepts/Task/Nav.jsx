import React from 'react'
import "./Nav.css";

import { Link } from 'react-router-dom';
const Nav = ({setIsLoggedIn}) => {
  
  return (
    <div id='nav-container'>
        <div><h1 id='logo'>LOGO</h1></div>
        <div >
            <ul id='nav-items'>
               <Link to={"/"}> <li>Home</li></Link>
                <Link to={"/jewelery"}><li>Jewellery</li></Link>
               <Link to={"/electronics"}> <li>Electronics</li></Link>
                <Link to={"/men"}><li>Men</li></Link>
                <Link to={"/women"}><li>Women</li></Link>
                <Link to={"/profile"}><li>Profile</li></Link>
                <Link to={"/cart"}><li>Cart</li>  </Link>  
            </ul>
           
        </div>
        <div> <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button></div>
    </div>
  )
}

export default Nav;