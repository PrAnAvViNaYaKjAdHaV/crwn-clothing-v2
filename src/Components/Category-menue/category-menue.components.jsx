import React from "react";
import CategoriesItem from "../Categories-item/Categories-item.components";
import "./category-menue.style.scss";
function CategoryMenue({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((props) => (
        <CategoriesItem categorie={props} key={props.id} />
      ))}
    </div>
  );
}

export default CategoryMenue;
