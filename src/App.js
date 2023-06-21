import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Newsletter from './components/pages/Newsletter';
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';
import SingleProduct from './components/pages/SingleProduct';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/newsletter" component={Newsletter} />
          <Route path="/products" component={Products} />
          <Route path="/my-cart" component={Cart} />
          <Route path="/single-product" component={SingleProduct} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
