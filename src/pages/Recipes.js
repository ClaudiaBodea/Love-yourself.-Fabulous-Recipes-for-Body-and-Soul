import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RecipeContainer from "../components/RecipeContainer";

const Recipes = () => {
  return (
    <>
      <Hero hero="recipesHero">
        <Banner title="our recipes">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RecipeContainer />
    </>
  );
};
export default Recipes;

//RecipeList

// import React, { useState, useContext } from "react";
// import Recipe from "./Recipe";
// import { RecipeContext } from "./RecipeContext";

// const RecipeList = () => {
//   const [recipes, setRecipes] = useContext(RecipeContext);
//   return (
//     <div>
//       {recipes.map((recipe) => (
//         <Recipe
//           name={recipe.name}
//           cooktime={recipe.cooktime}
//           difficulty={recipe.difficulty}
//           key={recipe.id}
//         />
//       ))}
//     </div>
//   );
// };

// export default RecipeList;
