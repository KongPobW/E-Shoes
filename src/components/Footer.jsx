import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-left">
                <h1 className="logo-footer">SHOES</h1>
                <p className="desc-footer">
                    We’re the newest thing you’ve known all along. What’s the secret to keeping a century-old brand fresh? Our mission.
                    Shoes is empowering today’s daring spirit of youth by celebrating freedom of expression through individuals and their movement(s).
                    Today, youth demand more. We constantly evolve to think and behave in new ways to ensure we continue to stand for
                    creativity, rebellion and daring spirit for the next 100 years.
                </p>
                <div className="social-container">
                    <div className="social-icon icon-ig">
                        <Link to="/" target="_blank" aria-label="Instagram" className="social-icon-link instagram">
                            <i className="fab fa-instagram" />
                        </Link>
                    </div>
                    <div className="social-icon icon-fb">
                        <Link to="/" target="_blank" aria-label="Facebook" className="social-icon-link facebook">
                            <i className="fab fa-facebook-f" />
                        </Link>
                    </div>
                    <div className="social-icon icon-yt">
                        <Link to="/" target="_blank" aria-label="Youtube" className="social-icon-link youtube">
                            <i className="fab fa-youtube" />
                        </Link>
                    </div>
                    <div className="social-icon icon-tw">
                        <Link to="/" target="_blank" aria-label="Twitter" className="social-icon-link twitter">
                            <i className="fab fa-twitter" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer-center">
                <h3 className="title-footer">Useful Links</h3>
                <ul className="list-footer">
                    <li className="list-item-footer">
                        <Link to="/" className="link-footer" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                    </li>
                    <li className="list-item-footer">
                        <Link to="/newsletter" className="link-footer" onClick={() => window.scrollTo(0, 0)}>Newsletter</Link>
                    </li>
                    <li className="list-item-footer">
                        <Link to="/my-cart" className="link-footer" onClick={() => window.scrollTo(0, 0)}>My Cart</Link>
                    </li>
                    <li className="list-item-footer">Order Tracking</li>
                    <li className="list-item-footer">Terms</li>
                    <li className="list-item-footer">
                        <Link to="/products" className="link-footer" onClick={() => window.scrollTo(0, 0)}>Products</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-right">
                <h3 className="title-footer">Contact Us</h3>
                <div className="contact-item-footer"><FontAwesomeIcon icon={faLocationDot} />622 Dixie Path , South Tobinchester 98336</div>
                <div className="contact-item-footer">
                    <FontAwesomeIcon icon={faPhone} />
                    <a href="tel: +66982592063" className="link-footer">+66 982592063</a>
                </div>
                <div className="contact-item-footer">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto: shoes.shop@gmail.com" className="link-footer">shoes.shop@gmail.com</a>
                </div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" className="payment-footer" />
            </div>
        </div>
    );
}

export default Footer;
