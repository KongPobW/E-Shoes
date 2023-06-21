import React, { useState, useEffect } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

export let arrayCartProducts = [];

function Cart() {

  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [amtChanged, setAmtChanged] = useState(false);

  useEffect(() => {
    showProducts();
    calculateSubtotal();
    calculateShipping();
    calculateDiscount();
    calculateTotal();
  }, [arrayCartProducts, subtotal, shipping, discount, amtChanged]);

  const calculateSubtotal = () => {
    let currentSubtotal = 0;
    for (let i = 0; i < arrayCartProducts.length; i++) {
      const product = arrayCartProducts[i];
      const price = product.price;
      const amount = product.amt;
      currentSubtotal = currentSubtotal + (price * amount);
    }
    setSubtotal(currentSubtotal);
  };

  const calculateShipping = () => {
    let currentShipping = 0;
    for (let i = 0; i < arrayCartProducts.length; i++) {
      const product = arrayCartProducts[i];
      const price = product.price;
      const amount = product.amt;
      currentShipping = currentShipping + (0.05 * (price * amount));
    }
    setShipping(parseFloat(currentShipping.toFixed(2)));
  };

  const calculateDiscount = () => {
    const currentDiscount = 0.03 * subtotal;
    setDiscount(parseFloat(currentDiscount.toFixed(2)));
  };

  const calculateTotal = () => {
    const currentTotal = subtotal + shipping - discount;
    setTotal(currentTotal);
  };

  const increaseAmt = (pd) => {
    const currentAmt = pd.amt + 1;
    const pdIndex = arrayCartProducts.indexOf(pd);
    arrayCartProducts[pdIndex].amt = currentAmt;
    setAmtChanged(!amtChanged);
  };
  const decreaseAmt = (pd) => {
    const currentAmt = pd.amt - 1;
    const pdIndex = arrayCartProducts.indexOf(pd);
    if (currentAmt === 0) {
      //remove the product in arrayCartProducts
      arrayCartProducts.splice(pdIndex, 1);
    } else {
      arrayCartProducts[pdIndex].amt = currentAmt;
    }
    setAmtChanged(!amtChanged);
  };

  const products = [];
  const showProducts = () => {

    const arrLength = arrayCartProducts.length;

    for (let i = 0; i < arrLength; i++) {

      const pd = arrayCartProducts[i];

      products.push(
        <>
          <div className="pd-cart">
            <div className="pd-detail-container">
              <img className="cart-pd-img" src={pd.img} />
              <div className="cart-pd-detail">
                <span className="cart-pd-name"><b>Product:</b> {pd.name}</span>
                <div className="cart-pd-color" style={{ backgroundColor: pd.color }} />
                <span className="cart-pd-size"><b>Size:</b> {pd.size}</span>
              </div>
            </div>
            <div className="cart-pdpricedetail-container">
              <div className="cart-pdamt-container">
                <FontAwesomeIcon icon={faMinus} onClick={() => decreaseAmt(pd)} />
                <div className="pdamt-cart">{pd.amt}</div>
                <FontAwesomeIcon icon={faPlus} onClick={() => increaseAmt(pd)} />
              </div>
              <div className="pdprice-cart">${pd.price}</div>
            </div>
          </div>
          {i === arrLength - 1 ? "" : <hr className="hr-cart" />}
        </>
      );
    }

    return <div className="info-cart">{products}</div>;
  };

  return (
    <div className="cart-container">
      <div className="wrapper-cart">
        <h1 className="title-cart">My Cart</h1>
        <div className="cart-top-container">
          <span className="cart-top-text">Shopping Bag ({arrayCartProducts.length})</span>
        </div>
        <div className="cart-bottom-container">
          {showProducts()}
          <div className="cart-summary-container">
            <h1 className="cart-summary-title">Order Summary</h1>
            <div className="cart-summary-item">
              <span className="summary-item-text">Subtotal</span>
              <span className="summary-item-price">${subtotal}</span>
            </div>
            <div className="cart-summary-item">
              <span className="summary-item-text">Estimated Shipping</span>
              <span className="summary-item-price">${shipping}</span>
            </div>
            <div className="cart-summary-item">
              <span className="summary-item-text">Shipping Discount</span>
              <span className="summary-item-price">${discount}</span>
            </div>
            <div className="cart-summary-item total-cart">
              <span className="summary-item-text">Total</span>
              <span className="summary-item-price">${total}</span>
            </div>
            <button className="cart-btn-checkout">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
