import React, { Component } from "react";
import defaultRecp from "../images/recipe-11.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RecipeContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultRecp,
    };
  }
  static contextType = RecipeContext;
  //   componentDidMount() {}

  render() {
    const { getRecipe } = this.context;
    const recipe = getRecipe(this.state.slug);
    if (!recipe) {
      //is undefined
      return (
        <div className="error">
          <h3>no such recipe could be found...</h3>
          <Link to="/recipes" className="btn-primary">
            back to recipes
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      difficulty,
      cooktime,
      gluten,
      lowcarb,
      images,
      ingred_name,
      quantity,
      unit_name,
      calories,
    } = recipe;

    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultRecp}>
          <Banner title={`${name} recipe`}>
            <Link to="/recipes" className="btn-primary">
              back to recipes
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-recipe">
          <div className="single-recipe-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-recipe-info">
            <article className="desc">
              <h3>preparation</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>info</h3>
              <h6>
                {" "}
                cooktime:{" "}
                {cooktime > 1 ? `${cooktime} hours` : `${cooktime} hour`}
              </h6>
              <h6>
                difficulty:{" "}
                {difficulty == "master-chef"
                  ? `${difficulty} level`
                  : `${difficulty}`}
              </h6>
              <h6>total calories: {calories}</h6>
              <h6>{gluten ? "allergens: gluten" : "gluten-free recipe"}</h6>
              <h6>{lowcarb && "lowcarb recipe"}</h6>
            </article>
          </div>
        </section>

        <section className="recipe-extras">
          <h6>ingredients</h6>
          <ul className="extras">
            <div className="ingredients">
              <p>
                {" "}
                {ingred_name.map((item, index) => {
                  return <li key={index}>- {item}</li>;
                })}
              </p>
              <p>
                {quantity.map((item, index) => {
                  return <li key={index}> {item}</li>;
                })}
              </p>
              <p>
                {" "}
                {unit_name.map((item, index) => {
                  return <li key={index}> {item}</li>;
                })}
              </p>
            </div>
          </ul>
        </section>
      </>
    );
  }
}
