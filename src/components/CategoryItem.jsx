import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem({ category }) {
    return (
        <div className="cat-item-container">
            <img className="cat-img-item" src={category.img} />
            <div className="cat-info-container">
                <h1 className="title-cat">{category.title}</h1>
                <button className="btn-cat">
                    <Link to={{ pathname: "/products", state: { category } }} className="link-shopnow" onClick={() => window.scrollTo(0, 0)}>
                        SHOP NOW
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default CategoryItem;
