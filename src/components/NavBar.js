import React from "react";
import './../components/NavBar.css';
import CartWidget from './../components/CartWidget';
import ItemListContainer from "./ItemListContainer";
import logo_header from './../img/logo_header.png';
import {Link, NavLink} from "react-router-dom"

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbarPrincipal">
            <div className="container-fluid">
                <a className="navbar-brand title_nav" href="#"> 
                <NavLink to="/">
                    <img class="logo_header" src={logo_header}></img>
                </NavLink>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/category/Computadoras">COMPUTADORAS DE ESCRITORIO</a></li>
                                <li><a className="dropdown-item" href="/category/Almacenamiento">ALMACENAMIENTO</a></li>
                                <li><a className="dropdown-item" href="/category/Gabinetes">GABINETES</a></li>
                                <li><a className="dropdown-item" href="/category/Procesadores">PROCESADORES</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cambios y garantias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Centro de ayuda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <CartWidget />
                    </span>
                </div>
            </div>
        </nav>
    ) 
}

export default Navbar;