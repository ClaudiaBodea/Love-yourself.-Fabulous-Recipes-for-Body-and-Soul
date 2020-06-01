import React, { Component } from "react";
import items from "./data";

const RecipeContext = React.createContext();

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

  //getData

  componentDidMount() {
    //this.getData
    let recipes = this.formatData(items);
    // console.log(items);
    let featuredRecipes = recipes.filter((recipe) => recipe.featured === true);
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
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.id;
      let images = item.images;
      let ingred_name = item.ingredients.map(
        (ingredient) => ingredient.ingred_name
      );
      let quantity = item.ingredients.map((ingredient) => ingredient.quantity);
      let unit_name = item.ingredients.map(
        (ingredient) => ingredient.unit_name
      );
      let calories = item.ingredients.map((ingredient) => ingredient.calories);

      //   calories.reduce(
      //     (ingredient) => calories + parseInt(ingredient.calories),
      //     2
      //   );

      console.log(calories);

      //   let totalCal = 0;
      //   calories.forEach(addCal);
      //   function addCal(calories) {
      //     totalCal += calories;
      //   }

      //     var array = [1, 2, 3, 4, 5];
      //     // Getting sum of numbers
      //     var sum = array.reduce(function(a, b){
      //         return a + b;
      //     }, 0);
      //     console.log(sum); // Prints: 15

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
    calories = parseInt(calories);

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

// import React, { useState, createContext } from "react";

// export const RecipeContext = createContext();

// export const RecipeProvider = (props) => {
//   const [recipes, setRecipes] = useState([
//     {
//       name: "Mushrooms with blue cheese",
//       cooktime: "medium",
//       difficulty: "easy",
//       id: 1,
//     },
//     {
//       name: "Ham and rucola sandwich",
//       cooktime: "quick",
//       difficulty: "easy",
//       id: 2,
//     },
//     {
//       name: "Yogurt dream",
//       cooktime: "quick",
//       difficulty: "medium",
//       id: 3,
//     },
//     {
//       name: "Peer puree",
//       cooktime: "worth-waiting-for",
//       difficulty: "master-chef",
//       id: 4,
//     },
//   ]);
//   return (
//     <RecipeContext.Provider value={[recipes, setRecipes]}>
//       {props.children}
//     </RecipeContext.Provider>
//   );
// };
