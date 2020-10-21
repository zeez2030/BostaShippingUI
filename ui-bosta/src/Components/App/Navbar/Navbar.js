import React from 'react'
import './Navbar.css'
import SVG from '../../../assets/images/bosta.svg';
const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={SVG} width="100" height="30" alt="" loading="lazy" />

            </a>
        </nav>
    )
}

export default Navbar