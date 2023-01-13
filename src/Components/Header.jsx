import React from "react";
import "styles/Header.css"
import logo from "media/icon.png"
import { Link } from "react-router-dom";


export default function Header () {

    

    return (
        <div className="header">
            <div className="container logo-nav-container">
                <div className="logo">
                    <img alt="Logo"className="circular-square" src={logo}/>
                </div>
                <span className="menu-icon">
                    MENU
                </span>
                <nav className="navigation">
                    <ul>
                        <li>
                            <Link className="Link" to="/">INICIO</Link>
                        </li>
                        <li>
                            <Link className="Link" to="about">ACERCA</Link>
                        </li>
                        <li>
                            <Link className="Link" to="contact">CONTACTO</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}