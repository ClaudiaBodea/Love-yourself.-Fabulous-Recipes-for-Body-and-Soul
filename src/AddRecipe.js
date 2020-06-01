import React, { useState, useContext } from "react";
import { RecipeContext } from "./RecipeContext";

const AddRecipe = () => {
  const [name, setName] = useState("");
  const [cooktime, setCooktime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [recipes, setRecipes] = useContext(RecipeContext);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateCooktime = (e) => {
    setCooktime(e.target.value);
  };
  const updateDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const addRecipe = (e) => {
    e.preventDefault();
    setRecipes((prevRecipes) => [
      ...prevRecipes,
      { name: name, cooktime: cooktime, difficulty: difficulty },
    ]);
  };

  return (
    <form onSubmit={addRecipe}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input
        type="text"
        name="cooktime"
        value={cooktime}
        onChange={updateCooktime}
      />
      <input
        type="text"
        name="difficulty"
        value={difficulty}
        onChange={updateDifficulty}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddRecipe;
