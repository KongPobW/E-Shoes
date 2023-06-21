import React, { useState } from 'react';
import './SingleProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';
import { arrayCartProducts } from './Cart';

function SingleProduct(props) {

  const product = props.location.state.product;
  let [amt, setAmt] = useState(1);

  const increaseAmt = () => {
    if (amt >= 1) {
      setAmt(++amt);
    }
  };
  const decreaseAmt = () => {
    if (amt > 1) {
      setAmt(--amt);
    }
  };

  const handleAddToCart = (product) => {
    const selectedSize = document.getElementsByClassName("select-spd")[0].value;
    const cartProduct = {
      img: product.img,
      name: product.name,
      color: product.color,
      size: selectedSize,
      amt: amt,
      price: product.price
    };
    arrayCartProducts.push(cartProduct);
    alert("Product is added to cart");
  };

  const size = [];
  const loopSize = () => {
    for (let i = 35; i < 47; i++) {
      size.push(<option>{i}</option>);
    }
    return <select className="select-spd">{size}</select>;
  };

  return (
    <div className="spd-container">
      <div className="wrapper-spd">
        <div className="spd-img-container">
          <img src={product.img} className="img-spd" />
        </div>
        <div className="spd-info-container">
          <h1 className="title-spd">{product.name}</h1>
          <p className="desc-spd">{product.desc}</p>
          <span className="price-spd">${product.price}</span>
          <div className="spd-filter-container">
            <div className="filter-spd">
              <div className="spd-filter-title">Color</div>
              <div className="spd-filter-color" style={{ backgroundColor: product.color }} />
            </div>
            <div className="filter-spd">
              <div className="spd-filter-title">Size</div>
              {loopSize()}
            </div>
          </div>
          <div className="spd-add-container">
            <div className="spd-amt-container">
              <FontAwesomeIcon onClick={decreaseAmt} icon={faMinus} />
              <span className="amt-spd">{amt}</span>
              <FontAwesomeIcon onClick={increaseAmt} icon={faPlus} />
            </div>
            <button className="btn-spd" onClick={() => handleAddToCart(product)}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
