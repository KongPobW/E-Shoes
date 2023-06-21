import React, { useState } from 'react';
import './Products.css';
import '../../App.css';
import PDS from '../PDS';
import { products } from '../../data';

function Products(props) {

    let selectedCategory;

    try {
        selectedCategory = props.location.state.category.title.substring(0, 1);
    } catch (error) {
        selectedCategory = "";
    }

    const [selectedType, setSelectedType] = useState(selectedCategory);

    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    const filteredProducts = selectedType ? products.filter((product) => product.cat === selectedType) : products;

    return (
        <div className="products-container">
            <h1 className="title-products">Products</h1>
            <div className="products-filter-container">
                <div className="filter-products">
                    <span className="products-filter-txt">Filter Products:</span>
                    <select className="select-products" value={selectedType} onChange={handleSelectChange}>
                        <option value="" disabled>Type of Products</option>
                        <option value="M">Man</option>
                        <option value="W">Woman</option>
                        <option value="S">Sport</option>
                    </select>
                </div>
            </div>
            <PDS products={filteredProducts} />
        </div>
    );
}

export default Products;
