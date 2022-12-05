import React from "react";
import "./categories-item.style.scss";
const CategoriesItem = ({ categorie }) => {
  const { id, imageUrl, title } = categorie;
  return (
    <div className="category-container" key={id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoriesItem;
