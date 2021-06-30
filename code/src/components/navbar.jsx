import React from 'react';
// import About from './About';
// import Home from './Home';
// import Contact from './contact';
import {  NavLink , Link } from 'react-router-dom';

const NavBar = (props) => {
    return ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/menu">Menu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart">Shopping cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Admins</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/admin">Admin</NavLink>
        </li> */}


      </ul>
    </div>
      <span style={{backgroundColor: "blue"}}>{props.productsCount}</span>

    </div>
    <Link to="/cart">
        <span className="badge badge-primary">
          <i style={{ color: "white" }} className="fas fa-cart-plus"></i>
          {props.productsCount}
        </span>
      </Link>
  </nav> );
}
 
export default NavBar;
