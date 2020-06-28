import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Others from "./pages/Others";
import SingleRecipe from "./pages/SingleRecipe";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import AddRecipe from "./AddRecipe";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={Recipes} />
        {/* <Route exact path="/others" component={Others} /> */}
        <Route exact path="/recipes/:slug" component={SingleRecipe} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
