import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return (
      <div className="empty-search">
        <h3>no recipes match your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="recipeslist">
      <div className="recipeslist-center">
        {recipes.map((item) => {
          return <Recipe key={item.id} recipe={item} />;
        })}
      </div>
    </section>
  );
}
