import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { RecipeContext } from "../context";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen }); //toggles: false vs true
  };

  static contextType = RecipeContext;

  render() {
    let { recipes } = this.context;
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Meal Plan" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes:{recipes.length}</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// import React, { useContext } from "react";
// import "./App.css";
// import { RecipeContext } from "./RecipeContext";

// const Nav = () => {
//   const [recipes, setRecipes] = useContext(RecipeContext);

//   const navStyle = {
//     color: "white",
//   };
//   return (
//     <nav>
//       <h3>Claudia Bodea</h3>
//       <p className="nav-links">List of Recipes: {recipes.length}</p>
//     </nav>
//   );
// };

// export default Nav;
