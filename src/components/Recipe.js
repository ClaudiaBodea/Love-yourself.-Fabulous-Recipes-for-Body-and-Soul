import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/recipe-1.jpg";
import PropTypes from "prop-types";

export default function Recipe({ recipe }) {
  const { name, slug, images, calories } = recipe;

  return (
    <article className="recipe">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="delicious recipe" />
        <div className="price-top">
          <h6>{calories}</h6>
          <p>calories</p>
        </div>
        <Link to={`/recipes/${slug}`} className="btn-primary recipe-link">
          Features
        </Link>
      </div>
      <p className="recipe-info">{name}</p>
    </article>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    // images: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    calories: PropTypes.number.isRequired,
  }),
};
