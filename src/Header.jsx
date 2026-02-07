import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import cart from "./assets/shopping-bag.png";
// import expertImg from "./assets/images/Banner-img2.png"

function Header() {

const [header,setHeader] = useState(
    [
        {
            img:"RCX KART",
            navItems: [
      { nav: "Home" ,routeUrl:"/home"},
      { nav: "Products",routeUrl:"/product" },
      {nav:"Logout", routeUrl:"/"},
      {nav:"Admin",routeUrl:"/admin"}
    //    { nav: "Regsiter",routeUrl:"/register" },
    //   { nav: "User", routeUrl:"/user" },
    //   { nav: "Blogs" },
    //   { nav: "Contact" }
    ]
        },
       
    ]
)

     return (
        <>
        {header.map((tag, index) => (
  <nav
    key={index}
    className="navbar navbar-expand-lg navbar-dark  dark shadow nav-bg p-4"
  >
    <div className="container">

      {/* Brand */}
      <Link className="navbar-brand fw-bold text-danger" to="/">
        {tag.img}
      </Link>

      {/* Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#rcNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Nav Items */}
      <div className="collapse navbar-collapse" id="rcNavbar">
          <ul className="navbar-nav ms-auto gap-lg-3 align-items-center">
            {tag.navItems.map((item, i) => (
              <li key={i} className="nav-item">
                <Link className="nav-link" to={item.routeUrl}>
                  {item.nav}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link className="nav-link cart-link d-flex align-items-center gap-2" to="/cart">
                <img 
                  src={cart} 
                  alt="Cart" 
                  className="cart-nav-img" 
                  style={{ width: '32px', height: '32px', objectFit: 'contain' }} 
                />
                <span className="cart-text">Cart</span>
              </Link>
            </li>
          </ul>
        </div>

    </div>
  </nav>
))}


        
       </>       
     )
}

export default Header
