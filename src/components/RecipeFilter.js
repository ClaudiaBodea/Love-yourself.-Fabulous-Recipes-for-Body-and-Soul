import React from "react";
import { useContext } from "react";
import { RecipeContext } from "../context";
import Title from "./Title";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RecipesFilter = ({ recipes }) => {
  // react hooks
  const context = useContext(RecipeContext);
  const {
    handleChange,
    difficulty,
    minCook,
    maxCook,
    calories,
    minCal,
    maxCal,
    lowcarb,
    gluten,
  } = context;

  // get unique types
  let types = getUnique(recipes, "difficulty");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  //   get unique cooktime
  let hours = getUnique(recipes, "cooktime");
  hours = ["all", ...hours];
  hours = hours.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search recipes" />
      <form className="filter-form">
        {/* coktime  */}
        {/* <div className="form-group">
          <label htmlFor="cooktime">Cooktime - hours</label>
          <select
            name="cooktime"
            id="cooktime"
            onChange={handleChange}
            className="form-control"
            value={cooktime}
          >
            {hours}
          </select>
        </div> */}
        {/* end of cooktime */}
        {/* cooktime */}
        <div className="form-group">
          <label htmlFor="cooktime">Cooktime - hours </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minCook"
              value={minCook}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxCook"
              value={maxCook}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of cooktime */}
        {/* select difficulty type */}
        <div className="form-group">
          <label htmlFor="type">Recipe difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            onChange={handleChange}
            className="form-control"
            value={difficulty}
          >
            {types}
          </select>
        </div>
        {/* end of select difficulty type */}
        {/* recipe calories */}
        <div className="form-group">
          <label htmlFor="calories">recipe calories {calories}</label>
          <input
            type="range"
            name="calories"
            min={minCal}
            max={maxCal}
            id="calories"
            value={calories}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of recipe calories*/}

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="lowcarb"
              id="lowcarb"
              checked={lowcarb}
              onChange={handleChange}
            />
            <label htmlFor="lowcarb">lowcarb</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="gluten"
              checked={gluten}
              onChange={handleChange}
            />
            <label htmlFor="lowcarb">gluten</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default RecipesFilter;
