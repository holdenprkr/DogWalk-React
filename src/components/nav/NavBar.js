import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import NavLink from "./NavLink"

export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item cryptoNav">
                <NavLink to="/" {...props}>Home</NavLink>
            </li>
            <li className="navbar__item">
                <NavLink to="/owners" {...props}>Owners</NavLink>    
            </li>
            <li className="navbar__item">
                <NavLink to="/dogs" {...props}>Dogs</NavLink>    
            </li>
            <li className="navbar__item">
                <NavLink to="/walkers" {...props}>Walkers</NavLink>    
            </li>
        </ul>
    )
}