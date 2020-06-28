import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { RecipeProvider } from "./context";

ReactDOM.render(
  <RecipeProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </RecipeProvider>,
  document.getElementById("root")
);
