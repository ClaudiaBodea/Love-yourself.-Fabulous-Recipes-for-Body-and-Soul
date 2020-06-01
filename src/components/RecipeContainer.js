import React from "react";
import RecipeFilter from "./RecipeFilter";
import RecipeList from "./RecipeList";
import { withRecipeConsumer } from "../context";
import Loading from "./Loading";

function RecipeContainer({ context }) {
  const { loading, sortedRecipes, recipes } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RecipeFilter recipes={recipes} />
      <RecipeList recipes={sortedRecipes} />
    </>
  );
}

export default withRecipeConsumer(RecipeContainer);

// import React from "react";
// import RecipeFilter from "./RecipeFilter";
// import RecipeList from "./RecipeList";
// import { RecipeConsumer } from "../context";
// import Loading from "./Loading";

// export default function RecipeContainer() {
//   return (
//     <RecipeConsumer>
//       {(value) => {
//         const { loading, sortedRecipes, recipes } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello from Recipe Container
//             <RecipeFilter recipes={recipes} />
//             <RecipeList recipes={sortedRecipes} />
//           </div>
//         );
//       }}
//     </RecipeConsumer>
//   );
// }
