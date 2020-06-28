import React, { Component } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { RecipeContext } from "../context";
import { FaReact, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

export default class Footer extends Component {
  static contextType = RecipeContext;

  getYear() {
    return new Date().getFullYear();
  }

  render() {
    let { recipes, others } = this.context;

    return (
      <footer className="footer">
        <div className="foot-center">
          <div className="foot-header">
            <Link to="/">
              <img src={logo} alt="Meal Plan" />
            </Link>
          </div>
          <ul className="foot-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/others">Other recipes{others}</Link>
            </li>
          </ul>
        </div>

        <div class="follow">
          <a
            href="https://github.com/ClaudiaBodea/LoveYourself.FabulousRecipesForBodyAndSoul"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/Clau.Bodea" target="_blank">
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/claudia-b-829b88113/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://reactjs.org/" target="_blank">
            <FaReact />
          </a>
        </div>
        <small>
          &copy;
          <span>
            {this.getYear()} All rights reserved. Designed & Developed by
            <div id="developer"> Claudia Bodea</div>
          </span>
        </small>
      </footer>
    );
  }
}
