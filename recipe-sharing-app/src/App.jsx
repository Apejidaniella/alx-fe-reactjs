import React from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div>
      <h1>My Recipe App</h1>
      <RecipeList />
      <AddRecipeForm />
    </div>
  );
}

export default App;
