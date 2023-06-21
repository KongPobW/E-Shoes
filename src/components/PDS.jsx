import React from 'react';
import './PDS.css';
import Product from './Product';

function PDS({ products }) {
    return (
        <div className="pds-container">
            {products.map((product) =>
                <Product product={product} key={product.id} />
            )}
        </div>
    );
}

export default PDS;
