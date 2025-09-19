import {BrowserRouter, Routes, Route} from "react-router-dom"
import RecipeDetails from "./components/RecipeDetails";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
     <BrowserRouter> 
        <Routes>
           <Route path="/" element={<Home />} /> 
           <Route path="/details/:recipeId" element={<RecipeDetails />} /> 
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
