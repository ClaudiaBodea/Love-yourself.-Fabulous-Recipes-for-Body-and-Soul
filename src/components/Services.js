import React, { Component } from "react";
import {
  FaCocktail,
  FaShoppingBasket,
  FaGrinStars,
  FaPlusCircle,
} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Find yummy recipes",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consectetur.",
      },
      {
        icon: <FaGrinStars />,
        title: "Save your favourites",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consectetur.",
      },
      {
        icon: <FaPlusCircle />,
        title: "Build meal plan",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consectetur.",
      },
      {
        icon: <FaShoppingBasket />,
        title: "Go groceris shopping",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consectetur.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="solutions" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
