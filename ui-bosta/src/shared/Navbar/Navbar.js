import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SVG from '../../assets/images/bosta.svg';
const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container logo-container">
                <Link to="/" className="navbar-brand " href="#">
                    <img src={SVG} width="100" height="30" alt="Bosta Logo" loading="lazy" />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar