import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <div className="pd-container">
      <img src={product.img} className="img-pd" />
      <div className="info-pd">
        <div className="icon-pd">
          <Link to={{ pathname: "/single-product", state: { product } }} className="link-cartshopping-icon" onClick={() => window.scrollTo(0, 0)}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
        <div className="icon-pd">
          <Link to={{ pathname: "/single-product", state: { product } }} className="link-magnifyglass-icon" onClick={() => window.scrollTo(0, 0)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </div>
        <div className="icon-pd">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </div>
  );
}

export default Product;
