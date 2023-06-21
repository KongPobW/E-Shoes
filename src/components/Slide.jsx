import React from 'react';
import { Link } from 'react-router-dom';

function Slide(props) {
    return (
        <div className="slide" style={{ backgroundColor: props.bg }}>
            <div className="img-container">
                <img className="img-slide" src={props.src} />
            </div>

            <div className="info-container">
                <h1 className="title-slide">{props.title}</h1>
                <p className="desc-slide">{props.desc}</p>
                <button className="btn-slide">
                    <Link to="/products" className="link-shopnow" onClick={() => window.scrollTo(0, 0)}>SHOP NOW</Link>
                </button>
            </div>
        </div>
    );
}

export default Slide;
