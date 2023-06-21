import React from 'react';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import './Category.css';

function Category() {
  return (
    <div className="cat-container">
      {categories.map((category) =>
        <CategoryItem category={category} key={category.id} />
      )}
    </div>
  );
}

export default Category;
