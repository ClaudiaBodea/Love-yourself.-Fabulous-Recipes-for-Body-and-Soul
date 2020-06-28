import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RecipeContainer from "../components/RecipeContainer";

const Others = () => {
  return (
    <>
      <Hero hero="recipesHero">
        <Banner title="other recipes">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RecipeContainer />
    </>
  );
};
export default Others;
