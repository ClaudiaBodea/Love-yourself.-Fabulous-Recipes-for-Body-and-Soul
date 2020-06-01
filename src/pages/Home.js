import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRecipes from "../components/FeaturedRecipes";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="find plan love"
          subtitle="fabulous recipes for body and soul"
        >
          <Link to="/recipes" className="btn-primary">
            our recipes
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRecipes />
    </>
  );
}
