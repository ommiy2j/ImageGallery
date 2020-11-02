import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


function Menu() {
    return (
        <div className="container-fluid nav">
            <NavLink className="navLinks" activeClassName='active_class' exact to='/'>Home</NavLink>
            <NavLink className="navLinks" activeClassName='active_class' to='/about'>About</NavLink>
        </div>
    )
}

export default Menu

