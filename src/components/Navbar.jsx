import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    <Link to="/" className="navbar-logo" onClick={() => window.scrollTo(0, 0)}>ESHOES<i className="fab fa-typo3" /></Link>

                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/newsletter" className="nav-links" onClick={() => window.scrollTo(0, 0)}>Newsletter</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={() => window.scrollTo(0, 0)}>Products</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/my-cart" className="nav-links" onClick={() => window.scrollTo(0, 0)}>My Cart</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
}

export default Navbar;
