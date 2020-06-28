import React, { Component } from "react";
// import items from "./data";
import details1 from "./images/details-1.jpg";
import details2 from "./images/details-2.jpg";
import details3 from "./images/details-3.jpg";
import img1 from "./images/recipe-1.jpg";
import img2 from "./images/recipe-2.jpg";
import img3 from "./images/recipe-3.jpg";
import img4 from "./images/recipe-4.jpg";
import img5 from "./images/recipe-5.jpg";
import img6 from "./images/recipe-6.jpg";
import img7 from "./images/recipe-7.jpg";
import img8 from "./images/recipe-8.jpg";
import img9 from "./images/recipe-9.jpg";
import img10 from "./images/recipe-10.jpg";
import img11 from "./images/recipe-11.jpg";
import img12 from "./images/recipe-12.jpg";
import img13 from "./images/recipe-13.jpg";
import img14 from "./images/recipe-14.jpg";
import img15 from "./images/recipe-15.jpg";
import img16 from "./images/recipe-16.jpg";

const RecipeContext = React.createContext();
const url = "http://localhost/meal_plan/api/rest.php";

export default class RecipeProvider extends Component {
  state = {
    recipes: [],
    sortedRecipes: [],
    featuredRecipes: [],
    loading: true,
    difficulty: "all",
    minCook: 0,
    maxCook: 0,
    calories: 0,
    minCal: 0,
    maxCal: 0,
    lowcarb: false,
    gluten: false,
  };

  //   getData;
  getData = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((items) => {
        console.log(items);

        let recipes = this.formatData(items);
        let featuredRecipes = recipes.filter(
          (recipe) => recipe.featured === true
        );
        let maxCal = Math.max(...recipes.map((item) => item.calories));
        let maxCook = Math.max(...recipes.map((item) => item.cooktime));

        this.setState({
          recipes,
          featuredRecipes,
          sortedRecipes: recipes,
          loading: false,
          calories: maxCal,
          maxCal,
          maxCook,
        });
      });

    //   .catch((error) => console.log("Request failed", error));
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    const imagesList = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
    ];
    let tempItems = items.map((item) => {
      let id = item.receipe_id;
      item.images = [imagesList[id - 1], details1, details2, details3];

      item.featured = item.featured === "0" ? false : true;
      item.lowcarb = item.lowcarb === "0" ? false : true;
      item.gluten = item.gluten === "0" ? false : true;

      let images = item.images;
      let ingred_name = item.ingredients.map(
        (ingredient) => ingredient.ingred_name
      );
      let quantity = item.ingredients.map((ingredient) => ingredient.quantity);
      let unit_name = item.ingredients.map(
        (ingredient) => ingredient.unit_name
      );
      let caloriesList = item.ingredients.map(
        (ingredient) => ingredient.calories
      );
      let calories = caloriesList.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
      }, 0);
      //   console.log(caloriesList);
      //   console.log(calories);

      let recipe = {
        ...item,
        images,
        ingred_name,
        quantity,
        unit_name,
        calories,
        id,
      };
      //   console.log(item);
      return recipe;
    });
    return tempItems;
  }

  getRecipe = (slug) => {
    let tempRecipes = [...this.state.recipes];
    const recipe = tempRecipes.find((recipe) => recipe.slug === slug);
    return recipe;
  };

  handleChange = (event) => {
    const target = event.target;
    const name = event.target.name; // what we have in state, the const
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      this.filterRecipes
    );
  };

  filterRecipes = () => {
    let {
      recipes,
      difficulty,
      minCook,
      maxCook,
      calories,
      lowcarb,
      gluten,
    } = this.state;

    //all the recipes
    let tempRecipes = [...recipes];

    //transform cooktime back to number from string
    // cooktime = parseInt(cooktime);
    // calories = parseInt(calories);

    //filter by difficulty type
    if (difficulty !== "all") {
      tempRecipes = tempRecipes.filter(
        (recipe) => recipe.difficulty === difficulty
      );
    }

    //filter by cooktime
    tempRecipes = tempRecipes.filter(
      (recipe) => recipe.cooktime >= minCook && recipe.cooktime <= maxCook
    );

    //filter by calories
    tempRecipes = tempRecipes.filter((recipe) => recipe.calories <= calories);

    //filter by lowcarb
    if (lowcarb) {
      tempRecipes = tempRecipes.filter((recipe) => recipe.lowcarb === true);
    }

    //filter by gluten
    if (gluten) {
      tempRecipes = tempRecipes.filter((recipe) => recipe.gluten === true);
    }

    //change state
    this.setState({
      sortedRecipes: tempRecipes,
    });
  };

  render() {
    return (
      <RecipeContext.Provider
        value={{
          ...this.state,
          getRecipe: this.getRecipe,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RecipeContext.Provider>
    );
  }
}

const RecipeConsumer = RecipeContext.Consumer;

export function withRecipeConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RecipeConsumer>
        {(value) => <Component {...props} context={value} />}
      </RecipeConsumer>
    );
  };
}

export { RecipeProvider, RecipeConsumer, RecipeContext };
