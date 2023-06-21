import React from 'react';
import '../../App.css';
import './Newsletter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Newsletter() {
  return (
    <div className="news-container">
      <h1 className="title-news">Newsletter</h1>
      <div className="desc-news">Get timely updates from your favorite products.</div>
      <form className="news-input-container">
        <input type="email" placeholder="Your email" className="input-news" />
        <button className="btn-news">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
