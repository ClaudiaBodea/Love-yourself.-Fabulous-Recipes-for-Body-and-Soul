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
    let { recipes, others } = this.context;

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
              <Link to="/">❤Home</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes:{recipes.length}</Link>
            </li>
            <li>
              <Link to="/others">Other recipes{others}</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
