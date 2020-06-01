import React, { Component } from "react";
import { RecipeContext } from "../context";
import Loading from "./Loading";
import Recipe from "./Recipe";
import Title from "./Title";

export default class FeaturedRecipes extends Component {
  static contextType = RecipeContext;
  render() {
    let { loading, featuredRecipes: recipes } = this.context;
    recipes = recipes.map((recipe) => {
      return <Recipe key={recipe.id} recipe={recipe} />;
    });

    return (
      <section className="featured-recipes">
        <Title title="featured recipes" />
        <div className="featured-recipes-center">
          {loading ? <Loading /> : recipes}
        </div>
      </section>
    );
  }
}
