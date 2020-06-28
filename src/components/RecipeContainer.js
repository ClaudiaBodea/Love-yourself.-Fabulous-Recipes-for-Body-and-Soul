import React from "react";
import RecipeFilter from "./RecipeFilter";
import RecipeList from "./RecipeList";
import { withRecipeConsumer } from "../context";
import Loading from "./Loading";

function RecipeContainer({ context }) {
  const { loading, sortedRecipes, recipes } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RecipeFilter recipes={recipes} />
      <RecipeList recipes={sortedRecipes} />
    </>
  );
}

export default withRecipeConsumer(RecipeContainer);
